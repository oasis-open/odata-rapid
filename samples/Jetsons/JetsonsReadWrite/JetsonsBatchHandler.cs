// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License.  See License.txt in the project root for license information.

using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNet.OData.Batch;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;

namespace JetsonsRW
{
    public class JetsonsBatchHandler : Microsoft.Restier.AspNetCore.Batch.RestierBatchHandler
    {
        public override async Task<IList<ODataBatchRequestItem>> ParseBatchRequestsAsync(
            HttpContext context)
        {
            IList<ODataBatchRequestItem> requests = await base.ParseBatchRequestsAsync(context);

            foreach (ODataBatchRequestItem requestItem in requests)
            {
                OperationRequestItem operation = requestItem as OperationRequestItem;
                if (operation != null)
                {
                    operation.Context.Request.CopyAbsoluteUrl(Jetsons.JetsonsApi.RemoveSessionIdFromUri(new Uri(operation.Context.Request.GetEncodedUrl(), UriKind.Absolute)));
                }
                else
                {
                    ChangeSetRequestItem changeset = requestItem as ChangeSetRequestItem;
                    if (changeset != null)
                    {
                        foreach (HttpContext changesetOperation in changeset.Contexts)
                        {
                            changesetOperation.Request.CopyAbsoluteUrl(Jetsons.JetsonsApi.RemoveSessionIdFromUri(new Uri(changesetOperation.Request.GetEncodedUrl(),UriKind.Absolute)));
                        }
                    }
                }
            }

            return requests;
        }
    }
}
