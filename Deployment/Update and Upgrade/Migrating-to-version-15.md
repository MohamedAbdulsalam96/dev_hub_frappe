This page is intended to make it easier for users who maintain custom apps/forks to migrate their installations to Version 15. 

---

### Lazy loading images on website

Browsers now support the lazy loading of images natively. If you were using Framework's lazy loading trick you can simply replace it with native lazy loading. 

```diff
- <div class="website-image-lazy" data-class="img-class" data-src="image.jpg" data-alt="image"></div>
+ <img class="img-class" src="image.jpg" alt="image" loading="lazy"></img>
``` 

### Return type of various date utilities. 


- `get_year_ending` used to return string date instead of `datetime.date`. This behavior is now made consistent with other utilities.
- `get_timespan_date_range` used to return string date tuples for some cases, now it always returns `datetime.date` tuples.


### No default index on `modified` field in child tables

Frappe v15 will drop the default index on `modified` field because it was rarely used. 

If your queries require an index on the `modified` field you should selectively add it on your doctypes. 


### Dropped python dependencies

We drop dependencies which aren't used anymore. This means if you were indirectly importing them in your app they will start breaking. 

Following python dependencies are removed:

- `googlemaps`
- `urllib3`
- `gitdb`
- `pyasn1`
- `pypng`
- `google-auth-httplib2`
- `schedule`
- `pycryptodome`


As a good practice, always pin dependencies you heavily depend on in your apps. 

### Migrate to vue3

If your custom app is using `vue 2`, `vuex 3`, `vue-router 2` or `vuedraggable 2.24.3` you will have to migrate the code to support `vue 3`, `vuex 4.0.2`, `vue-router 4.1.5` and `vuedraggable 4.1.0`

I have mentioned some points that will help you migrate check the description of PR [#18247](https://github.com/frappe/frappe/pull/18247)



### Removed database methods

Following unused functionality/methods are removed from `frappe.db`. 

- `db.sql` - `as_utf8` parameters is not supported anymore.
- `db.sql` - `formatted` parameter is not supported anymore.
- `db.set_value` - `for_update` parameter is now removed and not required anymore as updates happen in single query.
- `db.set` - Use `doc.db_set` instead.
- `db.touch` - This method is removed.
- `db.clear_table` - Use `db.truncate` instead
- `db.update` - Use `db.set_value` instead
- `db.set_temp` & `db.get_temp` - These methods are removed

### Validate from and to dates

With `doc.validate_from_to_dates(from_date_field: str, to_date_field: str)` you can validate that the date value of one field is before the date value of another field.

Previously, if either date was missing, we compared the other field with the current date. For example, if `from_date` was not set, but `to_date` was, then we validated that `to_date` was in the future and threw an error if not.

Now, if either date field is empty, we don't validate anything.

### Deprecated support for `device` in HTTP sessions

Since support for Cordova was dropped before a few major releases, there's no need to differentiate between `mobile` and `desktop` sessions anymore. Consequently, the PR [#18729](https://github.com/frappe/frappe/pull/18729) drops support for this from the internal Sessions API. In other words, specifying the `device` parameter as `mobile` when logging into your Frappe site will not be treated differently anymore.

Additionally, the system setting for **Session Expiry Mobile** has now been removed.

### Import `compare` from utils

Previously, you were able to use `frappe.compare(val1, operator, val2)`. Now you'll have to import `compare` from `frappe.utils` to use it:

```python
from frappe.utils import compare

compare(val1, operator, val2)
```

### Setting Single DocType value using `db.set_value` is not supported 

`db.set_value` was able to set single value if doctype and docname are same or docname is `None`. This behaviour is error prone and hence we have remove this. Use the explicit API for setting single values instead. 

```diff
// Using None
- frappe.db.set_value("Single Doctype", None, "field", "value")
+ frappe.db.set_single_value("Single Doctype", "field", "value")

// Using same docname as doctype
- frappe.db.set_value("Single Doctype", "Single Doctype", "field", "value")
+ frappe.db.set_single_value("Single Doctype", "field", "value")
```

### Access to local scope by client scripts is no longer supported

You can no longer access local variables like `this` in your client scripts. This usage was never intended.

Further reading:
- [Example of unsupported usage](https://github.com/frappe/frappe/blob/94398aab0ebf850ec6a418346af4b4e4434715fc/frappe/email/doctype/notification/notification.js#L4:L12)
- [Pull Request](https://github.com/frappe/frappe/pull/19882)
- [MDN Article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!)


### Renamed timezone utils

```diff
- from frappe.utils.data import convert_utc_to_user_timezone, get_time_zone
+ from frappe.utils.data import convert_utc_to_system_timezone, get_system_timezone
```

- [Deprecation PR](https://github.com/frappe/frappe/pull/20253)
- [Removal PR](https://github.com/frappe/frappe/pull/20255)


### Deprecation of `job_name` parameter in `frappe.enqueue`

To deduplicate jobs Frappe now uses RQ Job's `job_id` parameter, if you were using `job_name` to identify if duplicate job exists you should change code to use `job_id` instead.

```diff
- from frappe.core.page.background_jobs.background_jobs import get_info

- enqueued_jobs = [d.get("job_name") for d in get_info()]
- if self.name not in enqueued_jobs:
- 	enqueue(..., job_name=self.name)


+ from frappe.utils.background_jobs import enqueue, is_job_enqueued

+ job_id = f"data_import::{self.name}"
+ if not is_job_enqueued(job_id):
+ 	enqueue(..., job_id=job_id)
```


### `frappe.new_doc` arguments

`frappe.new_doc` now supports passing field values as kwargs, this change however introduces a breaking behaviour for previous keyword-args - `parent_doc`, `parentfield` and `as_dict`, if you were using any of them positionally you need to use them as keyword-arguments only. 


```diff
- doc = frappe.new_doc(doctype, parent_doc, parentfield, False)
+ doc = frappe.new_doc(doctype, parent_doc=parent_doc, parentfield=parentfield, as_dict=False)
```


### Frappe DB transaction hooks

The following functionality is removed:
- `frappe.local.rollback_observers`
- `frappe.db.add_before_commit`


You can use new DB transaction hooks instead: https://frappeframework.com/docs/v14/user/en/api/database#database-transaction-hooks 


### `redis_queue` and `redis_socketio` are merged

- Redis Queue instance is now also used as `socket.io` backend. You don't need to make any changes in code unless you were explicitly using redis_socketio instance for doing something else. 


### Minimum required node version is v18

In develop (v15), minimum required node version has been updated [from v14 to v18](https://github.com/frappe/frappe/pull/21370). You might face following error during build process
```
error frappe-framework@: The engine "node" is incompatible with this module. Expected version ">=18". Got "14.18.2"
```
you just need to [update your node version to v18](https://stackoverflow.com/a/10076029) to resolve the issue. You also might have to update few libraries in your custom app to make it compatible with node v18.


### Updated dependencies.

A lot of Frappe's python and JS dependencies are updated, if you were transitively relying on any of them then you need to ensure that any of the breaking changes in those dependencies doesn't affect you. You can check `pyproject.toml` and `package.json` file to find full list of dependencies. 


### Removal of `setup.py`

Frappe now only uses `pyproject.toml` to build python package. You need to update bench to latest version in order to install version-15 of Frappe. 


### Removal of custom script import from `/fixtures/custom_scipts`

This old feature allowed syncing one custom script per doctype from apps, since we now allow multiple client scripts for each doctype, this feature is misleading and behaves incorrectly. 

Instead of storing scripts in `/fixtures/custom_scripts` we recommend using fixtures directly which can sync client scripts like any other documents. 

refer: https://frappeframework.com/docs/v14/user/en/guides/app-development/how-to-create-custom-fields-during-app-installation 


### `frappe.get_installed_apps` doesn't support any arguments now


`frappe.get_installed_apps` had two arguments `sort` and `frappe_last`. Both are not useful since we changed the app hook resolution order.


### `bench build` doesn't support `--make_copy` and `--restore`

Both of these flags were deprecated before and replaced with `--hard-link`. The behaviour is kept the same. 


### `window` globals removed

In very old versions of Frappe we exposed some functionality via `window` object. This is not a good practice hence they were deprecated since long time. Most such globals are now removed. 


| window global | replacement |
| ---           | ---         |
| `get_today` | `frappe.datetime.get_today` |
| `date`, `dateutil` | `frappe.datetime` |
| `show_alert` | `frappe.show_alert` |
| `validated` | `frappe.validated` |
| `user` | `frappe.sesion.user` |
| `user_fullname` | `frappe.session.user_fullname` |
| `user_email` | `frappe.session.user_email` |
| `user_defaults` | `frappe.user_defaults` |
| `roles` | `frappe.user_roles` | 
| `sys_defaults` | `frappe.sys_defaults` |
| `frappe.query_report_filters_by_name` |  `frappe.query_report.get_filter_value(fieldname)` and `frappe.query_report.set_filter_value(fieldname, value)` |


### Removal of "Error Snapshot" DocType

`Error Log` doctype provides sufficient and equivalent information as Error Snapshot DocType hence this DocType is removed. 

Note: Frappe Framework logs all 5xx errors by default. 


### SocketIO namespacing

v15 improves multitenancy feature of realtime features by using SocketIO namespaces. Namespaces are site names which is name of site folder and also accessible via `frappe.local.site` server side. 

If you were using Frappe's SocketIO client you don't need to change anything. If you were using a custom client you need to change the initialization of the client like this.

```diff
- let socket = io(url, { withCredentials: true })
+ let socket = io(`${url}/${frappe.local.site}`, { withCredentials: true })
```


### Lazy connections on SocketIO client on website

SocketIO client on website now by default doesn't establish a connection. The connection is only established when first call is made to any of these APIs:
- `frappe.realtime.on`
- `frappe.realtime.connect`
- `frappe.realtime.emit`

Note: This change doesn't affect desk (`/app`) usage of socketio client. 


### `currentsite.txt` is not supported for setting the default site.

Alternatives:

- Use `bench use sitename`, it will set the `default_site` value in `common_site_config.json`.
- Use `FRAPPE_SITE=sitename` environment variable. 


### Event cancelled state

`Event` doctype had "Cancelled" as `event_type`. However, "Cancelled" makes more sense as status of event, hence this was moved to `status` field. 

If you were filtering cancelled events in code, you'll have to make changes accordingly

```diff
- frappe.get_all("Events", {"event_type": "Cancelled"})
+ frappe.get_all("Events", {"status": "Cancelled"})
```


### Safe exec restrictions 

Frappe v15 disables server scripts by default to strengthen the security of the system. This means following features will not work by default:

- Server Scripts (all kinds)
- Web page with Python context scripts
- Custom script report that use Python script for generating report. 
- System Console (python)

Server scripts can ONLY be enabled at the bench level. You can enable it using the following command:

```bash
bench set-config -g server_script_enabled 1
```

If you're on cloud hosting provider like Frappe Cloud:

- You need to be the owner of a private bench to enable the server script. Update the configuration from UI.



### New restrictive catch-all role `Desk User`

Frappe Framework provided a catchall role called "All" that was allocated to all users on the system. Frappe v15 adds a new catch-all role that's similar in nature but only allocated to Desk/System user i.e. excludes Website User. 

Lots of core doctypes now have more restrictive permissions to strengthen security. If you require relaxed permission for any doctype, you can reconfigure it from "Role Permission Manager" on your site. 


### No on_trash hook for oauth internal documents

Expired and invalid `OAuth Authorization Code` and `OAuth Bearer Token` are deleted without running any hooks now. 
 
ref: https://github.com/frappe/frappe/pull/22538


### search_link and search_widget response type

`search_link` and `search_widget` are two function used to search link fields. These functions returned response in non-standard response keys which is now standardized. 

If you used these function custom UI you might have to make the following change. 

```diff
- frappe.call({
-    method: "frappe.desk.search.search_link",
-        callback(r) {
-            resolve(r.results);
-        },
- });
+ frappe.call({
+    method: "frappe.desk.search.search_link",
+        callback(r) {
+            // notice the response key change. `message` is standard key for all responses
+            resolve(r.message); 
+        },
+ });

```