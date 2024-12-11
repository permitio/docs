package main

import (
	"fmt"

	"github.com/permitio/permit-golang/pkg/permit"
	"github.com/permitio/permit-golang/pkg/config"
	"github.com/permitio/permit-golang/pkg/enforcement"
)

func main() {
	// Create permit client
	permitConfig := config.NewConfigBuilder("").Build()
	permit := p.New(permitConfig)

	requestContext := map[string]string{
		"source": "docs",
	}

	usersToCheck := []string{
		"john@doe.com",
		"jane@doe.com",
	}

	checkRequests := make([]enforcement.CheckRequest, len(usersToCheck))
	// Create the requests to check
	resource := enforcement.ResourceBuilder("document").Build()
	for i, userKey := range usersToCheck {
		user := enforcement.UserBuilder(userKey).Build()
		checkRequests[i] = *enforcement.NewCheckRequest(user, "read", resource, requestContext)
	}

	var results []bool
	// Perform the bulk check
	results, err := permit.BulkCheck(checkRequests...)
	if err != nil {
		fmt.Printf("Error enforcing permissions: %s\n", err)
	} else {
		// The response indexes correspond to the request indexes
		for i, request := range checkRequests {
			if results[i] {
				fmt.Printf("%d. User '%s' is PERMITTED to '%s' a '%s'\n",
					i, request.User.Key, request.Action, request.Resource.Type,
				)
			} else {
				fmt.Printf("%d. User '%s' is NOT PERMITTED to '%s' a '%s'\n",
					i, request.User.Key, request.Action, request.Resource.Type,
				)
			}
		}
	}
}
