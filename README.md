# Core

Core API

## Endpoints

### Merchants

#### Merchant

* Get user's merchants
* Get merchant by Id
* Create merchant
* Update merchant
* Disable merchant

#### Merchant User

* List merchant's users
* Invite users
* Modify merchant user role
* Remove user from organisations

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

### Resource

#### Resource templates

* List resource templates
* Get resource template by id
* Create resource template
* Modify resource template
* Delete resource template
* Clone template

#### Resources

* List resources
* Get resource by id
* Create resource from template
* Modify resource
* Delete resource
* Check availability
* Get resource rates
* Add image to resource
* Delete image

#### Resource Configuration

* List resources configuration
* Get resource configuration by id
* Create resource configuration
* Modify resource configuration
* Delete resource configuration

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
* Add addon to rate
* Remove addon from rate
* Clone rate
* Publish rate
* Order rate

#### Discount

* List discounts
* Get discount by id
* Lookup discount code
* Create discount
* Modify discount
* Delete discount

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
* Update webhook endpoint
* Disable webhook endpoint
* Send test webhook

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
* Publish app

#### Marketplace Apps

* List apps
* Get app by id
* Install app
* Uninstall app

### Booking Configuration

#### Booking Template

* List booking templates
* Get booking template by id
* Create booking template
* Update booking template
* Delete booking template
* Clone booking template
* order booking actions

#### Booking Actions

* Get booking template actions
* Modify booking action
* Update booking action
* Remove booking action

#### UI Template

* List UI templates
* Get UI template by id
* Create UI template
* Update UI template
* Delete UI template

### Booking Setup

#### Booking Request

* List booking requests
* Create booking request
* Get booking request by id
* Update booking request
* Complete booking request
* Cancel booking request
* Update booking request actions

#### Booking Request Flow

* Create booking request flow
* Get booking request flow by id
* Update bookig request flow

### Booking

#### Bookings

* List bookings
* Get booking details
* Get booking summary
* Create bookings
* Update booking
* Update booking status

#### Booking Items

* List booking items
* Get booking item details
* Update booking item
* Update booking item status

#### Booking Addons

* Get booking addons
* Get booking item addons

#### Customers

* List customers
* Get customer by booking id
* Get customer by id
* Get customer resources (notifications, bookings, invoices ...)

#### Waitlist

* List waitlist entries
* Get waitlist entry
* Create waitlist entry
* Update waitlist entry
* Update waitlist priority
* Convert waitlist entry to booking

### Cancellations

#### Cancellation Policy

* List cancellation policies
* Get cancellation policy by id
* Create cancellation policy
* Update cancellation policy
* Delete cancellation policy

#### Cancellation Request

* List cancellation request
* Get cancellation request by id
* Create cancellation request
* Update cancellation request
* Update cancellation request status

### Payments

#### Payment Action (Payment)

* Get booking payments
* Get payment by id
* Create new payment
* Update payment status

#### Invoice

* List all invoices
* Get booking invoice(s)
* Get invoice payments
* Create invoice payment
* Get invoice by id
* Update invoice status
* Update invoice
* Download invoice

#### Refunds

* Create refund request
* Update refund status
* List refund requests
* Get refund request details
* Issue refund
* View refund logs

### Booking Notifications

#### Notification

* List notifications
* Get notification by id
* Create notification
* Trigger notification
* Update notification

#### Notification Templates

* List notification templates
* Create notification template
* Get notification template
* Update notification template
* Delete notification template
