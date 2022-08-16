# CMS

This project is a proof of concept to use NX for the monorepo for a `netlify-cms` rewrite.

At first, this project will follow most config and api requirements to allow for an easy conversion to `@cmsonfire/cms-app` with no guarantee of breaking changes. Improvements will be made to standardize design decisions over trying to simplify usage for plug-n-play (3rd party projects will be able to do plug-n-play versions).

Here is a starter list of targets:

- [x] - Typescript
- [x] - ES Modules
- [ ] - UI Style can be extended
- [ ] - All backend API's will be standard options (Major version bump on change)
- [ ] - Replace Redux
- [ ] - Replace Immutable
- [ ] - Use xState ?
- [ ] - Use react-query ?
- [ ] - Use react-location ?
- [ ] - Replace markdown editor ?
- [ ] - Support for mdx in editor ?

**NOTE:** This project is not a direct fork of `netlify-cms`, although most code will adhere to the workflow/config of the project as close as possible. Remember, this is a POC and will make decisions based on the best DX/UX. There will be an API first approach rather than git first approach for backend development (bring your own backend).

## CONTRIBUTING

Contributing is locked until there is a clear acceptance that a POC is sustainable ($$). At that time, there will be an opening of the project for contributions. Please be patient.
