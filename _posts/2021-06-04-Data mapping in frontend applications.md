---
Layout: post
Title: Data mapping in frontend applications
Date: 2021-06-04
---

Building a shiny new frontend application to access a legacy API is an all too common scenario. The conditions are less than ideal, in general. The legacy API was built based on a completely different set of requirements, based on different software development standards.

## The mapping process performs several operations:

- renames the received fields according to the frontend naming rules
- removes unnecessary fields from the received data structure
- performs checks on the received data to trigger required processes
- adds missing fields to the produced data structure
- sets default values for missing fields
- processes and normalizes the received data
  -creates and adds new fields and sets their values based on processing received data

## Conclusion

A data mapping interface is required in frontend applications when the integrity of data received from an API is not granted. The interface perform several functions on the received data: type checking, operations on the data fields, adding new data fields, deleting unnecessary data. The process ensures that the internal data structures of the applications are always consistent. When sending data out of the app, a reverse mapping can also be performed to revert to the external structures.
