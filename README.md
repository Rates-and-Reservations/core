# Core

Core API

## Endpoints

### Merchants

#### Merchant

* Get user's merchants
* Get merchant by Id
* Create merchant
* Update merchant
* Delete merchant

#### Merchant User

* Invite users
* Modify merchant user role

#### Merchant Contact

* Get user's merchant contacts
* Get merchant contact by Id
* Create merchant contact
* Update merchant contact
* Delete merchant contact

#### Merchant Asset

* List merchant assets
* Get merchant asset by id
* Upload merchant asset
* Delete merchant asset
* Modify asset metadata

### Resource Configuration

#### Resource templates

* List resource templates
* Get resource template by id
* Create resource template
* Modify resource template
* Delete resource template

#### Resources

* List resources
* Get resource by id
* Create resource from template
* Configure resource rate
* Modify resource
* Delete resource
* Configure resource

#### Add On

* List addons
* Get addon by id
* Create addon
* Modify addon
* Delete addon

### Pricing

#### Rates

* List rates
* Get rate by id
* Create rate
* Modify rate
* Delete rate

#### Discount

* List discounts
* Get discount by id
* Create discount
* Modify discount
* Delete discount

### Booking Configuration

### Booking

### Payments

### Booking Notifications

### Developers

#### API Keys

* List API keys
* Get API keu by id
* Create API key
* Disable API key
* Update API Key

#### Webhooks Endpoints

* List webhook endpoints
* Get webhook endpoint by id
* Create webhook endpoint
* Update webhook endpont
* Disable webhook endpoint

#### Webhook events

* List webhook events
* Get webhook event by id
* Create webhook event
* Update webhook event
* Delete webhook event

### Events and Logs

#### API Usage Logs and Stats

> Data from API usage will be streamed to Kibana and logs exposed to merchant via ETL pipeline

* Get API logs
* Get usage stats

#### Audit logs

* Get audit logs
* Get log detail
* Create log

#### Booking Activity

* Get booking activities
* Get booking activity detail
* Create booking activity

#### Webhook event log

> Should be handled by Svix

* Get webhook event log
* Get webhook event log detail
* Create webhook event log

### Apps

#### My Apps

* List my apps
* Get app by id
* Create app
* Modify App
* Disable app
* View merchant installs
* Disconnect merchant
* Get authorisation URL
* Get merchant access token

#### Marketplace Apps

* List apps
* Get app by id
* Install app
* Uninstall app
