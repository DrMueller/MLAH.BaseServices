# General
Using the Angular CLI assures the StyleGuide from John Papa is in place.
If in doubt,the style guide can also be found here: https://angular.io/guide/styleguide

# TSConfig
The TSConfig is configured or maximal compiler awareness: No implicit types, no missing null checks etc.

# Folder pattern
## Areas
Each subdomain has a own area under areas. This area must not know about other areas, but can use code from the infrastructure- or shared-kernel layer.

## Infrastrcture
This code can be seen as generic subdomains. It doesn't know about the business-related information, but acts as re-usable infrastructure layer. The only exception here is the Navigation: We could let each Area inject it's top level navgiation, but since this code changes rarely, we hard code it.

## Shared-domain
If Areas have shared business logic, this folder is the place. It must not know about areas, but can use infrastructure code. If code is altered here, the other areas using this code might end to be adjusted.
