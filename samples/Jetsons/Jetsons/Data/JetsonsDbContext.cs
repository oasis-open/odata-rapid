// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License.  See License.txt in the project root for license information.

using Microsoft.EntityFrameworkCore;
using System;
using System.Reflection;
using Microsoft.Restier.Core.Submit;
using System.Threading.Tasks;
using System.Threading;

namespace Jetsons.Data
{
    public partial class JetsonsDbContext : DbContext, IChangeSetInitializer, ISubmitExecutor
    {
        public JetsonsDbContext() { }

        public JetsonsDbContext(DbContextOptions<JetsonsDbContext> options) : base(options) { }

        public virtual DbSet<Company> Companies
        {
            get;
            set;
        }

        public Task<SubmitResult> ExecuteSubmitAsync(SubmitContext context, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task InitializeAsync(SubmitContext context, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        // This configures Entity Framework to use the SqlLite Jetsons.db
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
            optionsBuilder.UseSqlite(@"Filename=Data\Jetsons.db", options =>
            {
                options.MigrationsAssembly(Assembly.GetExecutingAssembly().FullName);
            });
            base.OnConfiguring(optionsBuilder);
        }

        // This is creating the mapping from the Entity Framework to the Database
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            // Map table names
            modelBuilder.Entity<Company>().ToTable("Companies", "Jetsons");
            modelBuilder.Entity<Company>(entity =>
            {
                entity.HasKey(e => e.stockSymbol);
                entity.OwnsMany(e => e.employees).ToTable("Employees","Jetsons");
            });

            //            base.OnModelCreating(modelBuilder);
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    }
}
