

# Entity identification

All entities of a RAPID service are contained in exactly one container.
In the context of a RAPID service:
   - entities that are contained in a containment collection are uniquely named by the name of that collection together with the value of its key.

   - All other entities are uniquely named by the name of their container.

These identifiers are only required to identify an entity in the context of an instance of a RAPID service. RAPID service independent identifiers are typically provided by values of additional propertie values.

# Entity Containment 

A RAPID service has one top level container of entities (the entitycontainer).  The entitycontainer contains all other entities of the service.   Every RAPID entity is contained in exactly one container.  Each container may contain other containers.  Entitysets and Singletons are subcontainers of the entitycontainer.  A singleton or entityset may be declared explicitly in the context of an entitycontainer, or may be declared implicitly in the declaraion of a containment navigationproperty.

In RAPID responses, the @context property identifies the container of the returned entity.

## Entity

An entity is a typed representation of a entity in the context of an instance of a RAPID service.  A resource may be represented by multiple entities in the context of one or more RAPID services. Multiple entities representing the same entity may exist at the same or differnt times.


## Entitycontainer

The entitycontainer is the one top-level container in a RAPID service.  It only contains entitysets and singletons.  The names of each must be unique in the context of the entitycontainer.

## Entityset

An Entityset is a named container of a collection of zero of more entities, each having a common type.  

## Singleton

A singleton is a named container of at most one entity.

## Containment properties

A containment property is a Navigationproperty with attribute ```ContainsTarget``` set to ```true```.  A scalar containment property is an implicit singleton and a collection containment property is an implicit entityset.