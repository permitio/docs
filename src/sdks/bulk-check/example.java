import io.permit.sdk.Permit;
import io.permit.sdk.PermitConfig;
import io.permit.sdk.enforcement.*;
import java.util.Arrays;


Permit permit = new Permit(
    new PermitConfig.Builder("[YOUR_API_KEY]").build()
);

boolean[] checks = permit.bulkCheck(Arrays.asList(
    // positive permission check
    new CheckQuery(
        User.fromString("john@doe.com"),
        "read",
        new Resource.Builder("document").withTenant(tenant.key).build()
    ),
    // negative permission check
    new CheckQuery(
        User.fromString("john@doe.com"),
        "create",
        new Resource.Builder("document").withTenant(tenant.key).build()
    )
));
