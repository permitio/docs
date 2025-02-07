resourcesToCheck := []enforcement.ResourceI{
    enforcement.ResourceBuilder("blog_post").WithID("1"),
    enforcement.ResourceBuilder("blog_post").WithID("2"),
    enforcement.ResourceBuilder("blog_post").WithID("3"),
}
allowedResources, err = permit.FilterObjects(
    user, "edit", requestContext, resourcesToCheck...
)