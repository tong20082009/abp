import { __decorate, __metadata, __awaiter, __generator, __spread, __rest, __assign, __extends } from 'tslib';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, Optional, SkipSelf, Component, Directive, ElementRef, Input, ChangeDetectorRef, HostBinding, TemplateRef, ViewContainerRef, IterableDiffers, EventEmitter, Self, Output, Renderer2, InjectionToken, Inject, Pipe, LOCALE_ID, APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RouterModule } from '@angular/router';
import { Action, Selector, State, Store, Actions, createSelector, Select, actionMatcher, InitState, UpdateState, setValue, NGXS_PLUGINS, NgxsModule } from '@ngxs/store';
import { noop as noop$1, combineLatest, from, throwError, of, Subject, Observable, fromEvent, ReplaySubject } from 'rxjs';
import snq from 'snq';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { tap, take, catchError, switchMap, takeUntil, debounceTime, filter, finalize, distinctUntilChanged } from 'rxjs/operators';
import { registerLocaleData, CommonModule } from '@angular/common';
import compare from 'just-compare';
import clone from 'just-clone';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OAuthService } from 'angular-oauth2-oidc';
import { Navigate, NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { takeUntilDestroy as takeUntilDestroy$1 } from '@ngx-validate/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PatchRouteByName = /** @class */ (function () {
    function PatchRouteByName(name, newValue) {
        this.name = name;
        this.newValue = newValue;
    }
    PatchRouteByName.type = '[Config] Patch Route By Name';
    return PatchRouteByName;
}());
if (false) {
    /** @type {?} */
    PatchRouteByName.type;
    /** @type {?} */
    PatchRouteByName.prototype.name;
    /** @type {?} */
    PatchRouteByName.prototype.newValue;
}
var GetAppConfiguration = /** @class */ (function () {
    function GetAppConfiguration() {
    }
    GetAppConfiguration.type = '[Config] Get App Configuration';
    return GetAppConfiguration;
}());
if (false) {
    /** @type {?} */
    GetAppConfiguration.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StartLoader = /** @class */ (function () {
    function StartLoader(payload) {
        this.payload = payload;
    }
    StartLoader.type = '[Loader] Start';
    return StartLoader;
}());
if (false) {
    /** @type {?} */
    StartLoader.type;
    /** @type {?} */
    StartLoader.prototype.payload;
}
var StopLoader = /** @class */ (function () {
    function StopLoader(payload) {
        this.payload = payload;
    }
    StopLoader.type = '[Loader] Stop';
    return StopLoader;
}());
if (false) {
    /** @type {?} */
    StopLoader.type;
    /** @type {?} */
    StopLoader.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GetProfile = /** @class */ (function () {
    function GetProfile() {
    }
    GetProfile.type = '[Profile] Get';
    return GetProfile;
}());
if (false) {
    /** @type {?} */
    GetProfile.type;
}
var UpdateProfile = /** @class */ (function () {
    function UpdateProfile(payload) {
        this.payload = payload;
    }
    UpdateProfile.type = '[Profile] Update';
    return UpdateProfile;
}());
if (false) {
    /** @type {?} */
    UpdateProfile.type;
    /** @type {?} */
    UpdateProfile.prototype.payload;
}
var ChangePassword = /** @class */ (function () {
    function ChangePassword(payload) {
        this.payload = payload;
    }
    ChangePassword.type = '[Profile] Change Password';
    return ChangePassword;
}());
if (false) {
    /** @type {?} */
    ChangePassword.type;
    /** @type {?} */
    ChangePassword.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RestOccurError = /** @class */ (function () {
    function RestOccurError(payload) {
        this.payload = payload;
    }
    RestOccurError.type = '[Rest] Error';
    return RestOccurError;
}());
if (false) {
    /** @type {?} */
    RestOccurError.type;
    /** @type {?} */
    RestOccurError.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SetLanguage = /** @class */ (function () {
    function SetLanguage(payload) {
        this.payload = payload;
    }
    SetLanguage.type = '[Session] Set Language';
    return SetLanguage;
}());
if (false) {
    /** @type {?} */
    SetLanguage.type;
    /** @type {?} */
    SetLanguage.prototype.payload;
}
var SetTenant = /** @class */ (function () {
    function SetTenant(payload) {
        this.payload = payload;
    }
    SetTenant.type = '[Session] Set Tenant';
    return SetTenant;
}());
if (false) {
    /** @type {?} */
    SetTenant.type;
    /** @type {?} */
    SetTenant.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProfileService = /** @class */ (function () {
    function ProfileService(rest) {
        this.rest = rest;
    }
    /**
     * @return {?}
     */
    ProfileService.prototype.get = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var request = {
            method: 'GET',
            url: '/api/identity/my-profile',
        };
        return this.rest.request(request);
    };
    /**
     * @param {?} body
     * @return {?}
     */
    ProfileService.prototype.update = /**
     * @param {?} body
     * @return {?}
     */
    function (body) {
        /** @type {?} */
        var request = {
            method: 'PUT',
            url: '/api/identity/my-profile',
            body: body,
        };
        return this.rest.request(request);
    };
    /**
     * @param {?} body
     * @param {?=} skipHandleError
     * @return {?}
     */
    ProfileService.prototype.changePassword = /**
     * @param {?} body
     * @param {?=} skipHandleError
     * @return {?}
     */
    function (body, skipHandleError) {
        if (skipHandleError === void 0) { skipHandleError = false; }
        /** @type {?} */
        var request = {
            method: 'POST',
            url: '/api/identity/my-profile/change-password',
            body: body,
        };
        return this.rest.request(request, { skipHandleError: skipHandleError });
    };
    ProfileService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProfileService.ctorParameters = function () { return [
        { type: RestService }
    ]; };
    /** @nocollapse */ ProfileService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ProfileService_Factory() { return new ProfileService(ɵɵinject(RestService)); }, token: ProfileService, providedIn: "root" });
    return ProfileService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProfileService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProfileState = /** @class */ (function () {
    function ProfileState(profileService) {
        this.profileService = profileService;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    ProfileState.getProfile = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var profile = _a.profile;
        return profile;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    ProfileState.prototype.profileGet = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var patchState = _a.patchState;
        return this.profileService.get().pipe(tap((/**
         * @param {?} profile
         * @return {?}
         */
        function (profile) {
            return patchState({
                profile: profile,
            });
        })));
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    ProfileState.prototype.profileUpdate = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        return this.profileService.update(payload).pipe(tap((/**
         * @param {?} profile
         * @return {?}
         */
        function (profile) {
            return patchState({
                profile: profile,
            });
        })));
    };
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    ProfileState.prototype.changePassword = /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    function (_, _a) {
        var payload = _a.payload;
        return this.profileService.changePassword(payload, true);
    };
    __decorate([
        Action(GetProfile),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ProfileState.prototype, "profileGet", null);
    __decorate([
        Action(UpdateProfile),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, UpdateProfile]),
        __metadata("design:returntype", void 0)
    ], ProfileState.prototype, "profileUpdate", null);
    __decorate([
        Action(ChangePassword),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, ChangePassword]),
        __metadata("design:returntype", void 0)
    ], ProfileState.prototype, "changePassword", null);
    __decorate([
        Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], ProfileState, "getProfile", null);
    ProfileState = __decorate([
        State({
            name: 'ProfileState',
            defaults: (/** @type {?} */ ({})),
        }),
        __metadata("design:paramtypes", [ProfileService])
    ], ProfileState);
    return ProfileState;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProfileState.prototype.profileService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Different locales from .NET
// Key is .NET locale, value is Angular locale
var localesMapping = {
    'ar-sa': 'ar-SA',
    'ca-ES-valencia': 'ca-ES-VALENCIA',
    'de-de': 'de',
    'es-ES': 'es',
    'en-US': 'en',
    'fil-Latn': 'en',
    'ku-Arab': 'en',
    'ky-Cyrl': 'en',
    'mi-Latn': 'en',
    'prs-Arab': 'en',
    'qut-Latn': 'en',
    nso: 'en',
    quz: 'en',
    'fr-FR': 'fr',
    'gd-Latn': 'gd',
    'ha-Latn': 'ha',
    'ig-Latn': 'ig',
    'it-it': 'it',
    'mn-Cyrl': 'mn',
    'pt-BR': 'pt',
    'sd-Arab': 'pa-Arab',
    'sr-Cyrl-RS': 'sr-Cyrl',
    'sr-Latn-RS': 'sr-Latn',
    'tg-Cyrl': 'tg',
    'tk-Latn': 'tk',
    'tt-Cyrl': 'tt',
    'ug-Arab': 'ug',
    'yo-Latn': 'yo',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} injector
 * @return {?}
 */
function getInitialData(injector) {
    /** @type {?} */
    var fn = (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var store = injector.get(Store);
        return store.dispatch(new GetAppConfiguration()).toPromise();
    });
    return fn;
}
/**
 * @param {?} injector
 * @return {?}
 */
function localeInitializer(injector) {
    /** @type {?} */
    var fn = (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var store = injector.get(Store);
        /** @type {?} */
        var lang = store.selectSnapshot(SessionState.getLanguage) || 'en';
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            registerLocale(lang).then((/**
             * @return {?}
             */
            function () { return resolve(); }), reject);
        }));
    });
    return fn;
}
/**
 * @param {?} locale
 * @return {?}
 */
function registerLocale(locale) {
    return import(
    /* webpackInclude: /(af|am|ar-SA|as|az-Latn|be|bg|bn-BD|bn-IN|bs|ca|ca-ES-VALENCIA|cs|cy|da|de|de|el|en-GB|en|es|en|es-US|es-MX|et|eu|fa|fi|en|fr|fr|fr-CA|ga|gd|gl|gu|ha|he|hi|hr|hu|hy|id|ig|is|it|it|ja|ka|kk|km|kn|ko|kok|en|en|lb|lt|lv|en|mk|ml|mn|mr|ms|mt|nb|ne|nl|nl-BE|nn|en|or|pa|pa-Arab|pl|en|pt|pt-PT|en|en|ro|ru|rw|pa-Arab|si|sk|sl|sq|sr-Cyrl-BA|sr-Cyrl|sr-Latn|sv|sw|ta|te|tg|th|ti|tk|tn|tr|tt|ug|uk|ur|uz-Latn|vi|wo|xh|yo|zh-Hans|zh-Hant|zu)\.js$/ */
    "@angular/common/locales/" + (localesMapping[locale] || locale) + ".js").then((/**
     * @param {?} module
     * @return {?}
     */
    function (module) {
        registerLocaleData(module.default);
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocalizationService = /** @class */ (function () {
    function LocalizationService(store, router, actions, otherInstance) {
        this.store = store;
        this.router = router;
        this.actions = actions;
        if (otherInstance)
            throw new Error('LocaleService should have only one instance.');
    }
    Object.defineProperty(LocalizationService.prototype, "currentLang", {
        get: /**
         * @return {?}
         */
        function () {
            return this.store.selectSnapshot(SessionState.getLanguage);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} reuse
     * @return {?}
     */
    LocalizationService.prototype.setRouteReuse = /**
     * @private
     * @param {?} reuse
     * @return {?}
     */
    function (reuse) {
        this.router.routeReuseStrategy.shouldReuseRoute = reuse;
    };
    /**
     * @param {?} locale
     * @return {?}
     */
    LocalizationService.prototype.registerLocale = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        var _this = this;
        var shouldReuseRoute = this.router.routeReuseStrategy.shouldReuseRoute;
        this.setRouteReuse((/**
         * @return {?}
         */
        function () { return false; }));
        this.router.navigated = false;
        return registerLocale(locale).then((/**
         * @return {?}
         */
        function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.router.navigateByUrl(this.router.url).catch(noop$1)];
                    case 1:
                        _a.sent();
                        this.setRouteReuse(shouldReuseRoute);
                        return [2 /*return*/];
                }
            });
        }); }));
    };
    /**
     * @param {?} keys
     * @param {...?} interpolateParams
     * @return {?}
     */
    LocalizationService.prototype.get = /**
     * @param {?} keys
     * @param {...?} interpolateParams
     * @return {?}
     */
    function (keys) {
        var interpolateParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            interpolateParams[_i - 1] = arguments[_i];
        }
        return this.store.select(ConfigState.getCopy.apply(ConfigState, __spread([keys], interpolateParams)));
    };
    /**
     * @param {?} keys
     * @param {...?} interpolateParams
     * @return {?}
     */
    LocalizationService.prototype.instant = /**
     * @param {?} keys
     * @param {...?} interpolateParams
     * @return {?}
     */
    function (keys) {
        var interpolateParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            interpolateParams[_i - 1] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getCopy.apply(ConfigState, __spread([keys], interpolateParams)));
    };
    LocalizationService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LocalizationService.ctorParameters = function () { return [
        { type: Store },
        { type: Router },
        { type: Actions },
        { type: LocalizationService, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    /** @nocollapse */ LocalizationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LocalizationService_Factory() { return new LocalizationService(ɵɵinject(Store), ɵɵinject(Router), ɵɵinject(Actions), ɵɵinject(LocalizationService, 12)); }, token: LocalizationService, providedIn: "root" });
    return LocalizationService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalizationService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    LocalizationService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    LocalizationService.prototype.actions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SessionState = /** @class */ (function () {
    function SessionState(localizationService) {
        this.localizationService = localizationService;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    SessionState.getLanguage = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var language = _a.language;
        return language;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    SessionState.getTenant = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var tenant = _a.tenant;
        return tenant;
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    SessionState.prototype.setLanguage = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState, dispatch = _a.dispatch;
        var payload = _b.payload;
        patchState({
            language: payload,
        });
        return combineLatest([dispatch(new GetAppConfiguration()), from(this.localizationService.registerLocale(payload))]);
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    SessionState.prototype.setTenantId = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        patchState({
            tenant: payload,
        });
    };
    __decorate([
        Action(SetLanguage),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, SetLanguage]),
        __metadata("design:returntype", void 0)
    ], SessionState.prototype, "setLanguage", null);
    __decorate([
        Action(SetTenant),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, SetTenant]),
        __metadata("design:returntype", void 0)
    ], SessionState.prototype, "setTenantId", null);
    __decorate([
        Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", String)
    ], SessionState, "getLanguage", null);
    __decorate([
        Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], SessionState, "getTenant", null);
    SessionState = __decorate([
        State({
            name: 'SessionState',
            defaults: (/** @type {?} */ ({})),
        }),
        __metadata("design:paramtypes", [LocalizationService])
    ], SessionState);
    return SessionState;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SessionState.prototype.localizationService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RestService = /** @class */ (function () {
    function RestService(http, store) {
        this.http = http;
        this.store = store;
    }
    /**
     * @param {?} err
     * @return {?}
     */
    RestService.prototype.handleError = /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this.store.dispatch(new RestOccurError(err));
        console.error(err);
        return throwError(err);
    };
    /**
     * @template T, R
     * @param {?} request
     * @param {?=} config
     * @param {?=} api
     * @return {?}
     */
    RestService.prototype.request = /**
     * @template T, R
     * @param {?} request
     * @param {?=} config
     * @param {?=} api
     * @return {?}
     */
    function (request, config, api) {
        var _this = this;
        if (config === void 0) { config = {}; }
        var _a = config.observe, observe = _a === void 0 ? "body" /* Body */ : _a, skipHandleError = config.skipHandleError;
        /** @type {?} */
        var url = api || this.store.selectSnapshot(ConfigState.getApiUrl()) + request.url;
        var method = request.method, options = __rest(request, ["method"]);
        return this.http.request(method, url, (/** @type {?} */ (__assign({ observe: observe }, options)))).pipe(observe === "body" /* Body */ ? take(1) : null, catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            if (skipHandleError) {
                return throwError(err);
            }
            return _this.handleError(err);
        })));
    };
    RestService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    RestService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store }
    ]; };
    /** @nocollapse */ RestService.ngInjectableDef = ɵɵdefineInjectable({ factory: function RestService_Factory() { return new RestService(ɵɵinject(HttpClient), ɵɵinject(Store)); }, token: RestService, providedIn: "root" });
    return RestService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    RestService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    RestService.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApplicationConfigurationService = /** @class */ (function () {
    function ApplicationConfigurationService(rest) {
        this.rest = rest;
    }
    /**
     * @return {?}
     */
    ApplicationConfigurationService.prototype.getConfiguration = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var request = {
            method: 'GET',
            url: '/api/abp/application-configuration',
        };
        return this.rest.request(request);
    };
    ApplicationConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ApplicationConfigurationService.ctorParameters = function () { return [
        { type: RestService }
    ]; };
    /** @nocollapse */ ApplicationConfigurationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ApplicationConfigurationService_Factory() { return new ApplicationConfigurationService(ɵɵinject(RestService)); }, token: ApplicationConfigurationService, providedIn: "root" });
    return ApplicationConfigurationService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApplicationConfigurationService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} routes
 * @param {?=} wrappers
 * @param {?=} parentNameArr
 * @param {?=} parentName
 * @return {?}
 */
function organizeRoutes(routes, wrappers, parentNameArr, parentName) {
    if (wrappers === void 0) { wrappers = []; }
    if (parentNameArr === void 0) { parentNameArr = (/** @type {?} */ ([])); }
    if (parentName === void 0) { parentName = null; }
    /** @type {?} */
    var filter = (/**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (route.children && route.children.length) {
            route.children = organizeRoutes(route.children, wrappers, parentNameArr, route.name);
        }
        if (route.parentName && route.parentName !== parentName) {
            parentNameArr.push(route);
            return false;
        }
        return true;
    });
    if (parentName) {
        // recursive block
        return routes.filter(filter);
    }
    /** @type {?} */
    var filteredRoutes = routes.filter(filter);
    if (parentNameArr.length) {
        return sortRoutes(setChildRoute(__spread(filteredRoutes, wrappers), parentNameArr));
    }
    return filteredRoutes;
}
/**
 * @param {?} routes
 * @param {?} parentNameArr
 * @return {?}
 */
function setChildRoute(routes, parentNameArr) {
    return routes.map((/**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (route.children && route.children.length) {
            route.children = setChildRoute(route.children, parentNameArr);
        }
        /** @type {?} */
        var foundedChildren = parentNameArr.filter((/**
         * @param {?} parent
         * @return {?}
         */
        function (parent) { return parent.parentName === route.name; }));
        if (foundedChildren && foundedChildren.length) {
            route.children = __spread((route.children || []), foundedChildren);
        }
        return route;
    }));
}
/**
 * @param {?=} routes
 * @return {?}
 */
function sortRoutes(routes) {
    if (routes === void 0) { routes = []; }
    if (!routes.length)
        return [];
    return routes
        .sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) { return a.order - b.order; }))
        .map((/**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (route.children && route.children.length) {
            route.children = sortRoutes(route.children);
        }
        return route;
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConfigState = /** @class */ (function () {
    function ConfigState(appConfigurationService, store) {
        this.appConfigurationService = appConfigurationService;
        this.store = store;
    }
    ConfigState_1 = ConfigState;
    /**
     * @param {?} state
     * @return {?}
     */
    ConfigState.getAll = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        return state;
    };
    /**
     * @param {?} state
     * @return {?}
     */
    ConfigState.getApplicationInfo = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        return state.environment.application || ((/** @type {?} */ ({})));
    };
    /**
     * @param {?} key
     * @return {?}
     */
    ConfigState.getOne = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            return state[key];
        }));
        return selector;
    };
    /**
     * @param {?} keys
     * @return {?}
     */
    ConfigState.getDeep = /**
     * @param {?} keys
     * @return {?}
     */
    function (keys) {
        if (typeof keys === 'string') {
            keys = keys.split('.');
        }
        if (!Array.isArray(keys)) {
            throw new Error('The argument must be a dot string or an string array.');
        }
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            return ((/** @type {?} */ (keys))).reduce((/**
             * @param {?} acc
             * @param {?} val
             * @return {?}
             */
            function (acc, val) {
                if (acc) {
                    return acc[val];
                }
                return undefined;
            }), state);
        }));
        return selector;
    };
    /**
     * @param {?=} path
     * @param {?=} name
     * @return {?}
     */
    ConfigState.getRoute = /**
     * @param {?=} path
     * @param {?=} name
     * @return {?}
     */
    function (path, name) {
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            var flattedRoutes = state.flattedRoutes;
            return ((/** @type {?} */ (flattedRoutes))).find((/**
             * @param {?} route
             * @return {?}
             */
            function (route) {
                if (path && route.path === path) {
                    return route;
                }
                else if (name && route.name === name) {
                    return route;
                }
            }));
        }));
        return selector;
    };
    /**
     * @param {?=} key
     * @return {?}
     */
    ConfigState.getApiUrl = /**
     * @param {?=} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            return state.environment.apis[key || 'default'].url;
        }));
        return selector;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    ConfigState.getSetting = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            return snq((/**
             * @return {?}
             */
            function () { return state.setting.values[key]; }));
        }));
        return selector;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    ConfigState.getGrantedPolicy = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            if (!key)
                return true;
            return snq((/**
             * @return {?}
             */
            function () { return state.auth.grantedPolicies[key]; }), false);
        }));
        return selector;
    };
    /**
     * @param {?} key
     * @param {...?} interpolateParams
     * @return {?}
     */
    ConfigState.getCopy = /**
     * @param {?} key
     * @param {...?} interpolateParams
     * @return {?}
     */
    function (key) {
        var interpolateParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            interpolateParams[_i - 1] = arguments[_i];
        }
        if (!key)
            key = '';
        /** @type {?} */
        var keys = (/** @type {?} */ (key.split('::')));
        /** @type {?} */
        var selector = createSelector([ConfigState_1], (/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            if (!state.localization)
                return key;
            var defaultResourceName = state.environment.localization.defaultResourceName;
            if (keys[0] === '') {
                if (!defaultResourceName) {
                    throw new Error("Please check your environment. May you forget set defaultResourceName? \n              Here is the example:\n               { production: false,\n                 localization: {\n                   defaultResourceName: 'MyProjectName'\n                  }\n               }");
                }
                keys[0] = snq((/**
                 * @return {?}
                 */
                function () { return defaultResourceName; }));
            }
            /** @type {?} */
            var copy = ((/** @type {?} */ (keys))).reduce((/**
             * @param {?} acc
             * @param {?} val
             * @return {?}
             */
            function (acc, val) {
                if (acc) {
                    return acc[val];
                }
                return undefined;
            }), state.localization.values);
            interpolateParams = interpolateParams.filter((/**
             * @param {?} params
             * @return {?}
             */
            function (params) { return params != null; }));
            if (copy && interpolateParams && interpolateParams.length) {
                interpolateParams.forEach((/**
                 * @param {?} param
                 * @return {?}
                 */
                function (param) {
                    copy = copy.replace(/[\'\"]?\{[\d]+\}[\'\"]?/, param);
                }));
            }
            return copy || key;
        }));
        return selector;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    ConfigState.prototype.addData = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var patchState = _a.patchState, dispatch = _a.dispatch;
        return this.appConfigurationService.getConfiguration().pipe(tap((/**
         * @param {?} configuration
         * @return {?}
         */
        function (configuration) {
            return patchState(__assign({}, configuration));
        })), switchMap((/**
         * @param {?} configuration
         * @return {?}
         */
        function (configuration) {
            /** @type {?} */
            var defaultLang = configuration.setting.values['Abp.Localization.DefaultLanguage'];
            if (defaultLang.includes(';')) {
                defaultLang = defaultLang.split(';')[0];
            }
            return _this.store.selectSnapshot(SessionState.getLanguage) ? of(null) : dispatch(new SetLanguage(defaultLang));
        })));
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    ConfigState.prototype.patchRoute = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState, getState = _a.getState;
        var name = _b.name, newValue = _b.newValue;
        /** @type {?} */
        var routes = getState().routes;
        /** @type {?} */
        var index = routes.findIndex((/**
         * @param {?} route
         * @return {?}
         */
        function (route) { return route.name === name; }));
        routes = patchRouteDeep(routes, name, newValue);
        return patchState({
            routes: routes,
        });
    };
    var ConfigState_1;
    __decorate([
        Action(GetAppConfiguration),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ConfigState.prototype, "addData", null);
    __decorate([
        Action(PatchRouteByName),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, PatchRouteByName]),
        __metadata("design:returntype", void 0)
    ], ConfigState.prototype, "patchRoute", null);
    __decorate([
        Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ConfigState, "getAll", null);
    __decorate([
        Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], ConfigState, "getApplicationInfo", null);
    ConfigState = ConfigState_1 = __decorate([
        State({
            name: 'ConfigState',
            defaults: (/** @type {?} */ ({})),
        }),
        __metadata("design:paramtypes", [ApplicationConfigurationService, Store])
    ], ConfigState);
    return ConfigState;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigState.prototype.appConfigurationService;
    /**
     * @type {?}
     * @private
     */
    ConfigState.prototype.store;
}
/**
 * @param {?} routes
 * @param {?} name
 * @param {?} newValue
 * @param {?=} parentUrl
 * @return {?}
 */
function patchRouteDeep(routes, name, newValue, parentUrl) {
    if (parentUrl === void 0) { parentUrl = null; }
    routes = routes.map((/**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        if (route.name === name) {
            if (newValue.path) {
                newValue.url = parentUrl + "/" + newValue.path;
            }
            if (newValue.children && newValue.children.length) {
                newValue.children = newValue.children.map((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) { return (__assign({}, child, { url: parentUrl + "/" + route.path + "/" + child.path })); }));
            }
            return __assign({}, route, newValue);
        }
        else if (route.children && route.children.length) {
            route.children = patchRouteDeep(route.children, name, newValue, (parentUrl || '/') + route.path);
        }
        return route;
    }));
    if (parentUrl) {
        // recursive block
        return routes;
    }
    return organizeRoutes(routes);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @return {?}
 */
function isFunction(value) {
    return typeof value === 'function';
}
/** @type {?} */
var takeUntilDestroy = (/**
 * @param {?} componentInstance
 * @param {?=} destroyMethodName
 * @return {?}
 */
function (componentInstance, destroyMethodName) {
    if (destroyMethodName === void 0) { destroyMethodName = 'ngOnDestroy'; }
    return (/**
     * @template T
     * @param {?} source
     * @return {?}
     */
    function (source) {
        /** @type {?} */
        var originalDestroy = componentInstance[destroyMethodName];
        if (isFunction(originalDestroy) === false) {
            throw new Error(componentInstance.constructor.name + " is using untilDestroyed but doesn't implement " + destroyMethodName);
        }
        if (!componentInstance['__takeUntilDestroy']) {
            componentInstance['__takeUntilDestroy'] = new Subject();
            componentInstance[destroyMethodName] = (/**
             * @return {?}
             */
            function () {
                isFunction(originalDestroy) && originalDestroy.apply(this, arguments);
                componentInstance['__takeUntilDestroy'].next(true);
                componentInstance['__takeUntilDestroy'].complete();
            });
        }
        return source.pipe(takeUntil(componentInstance['__takeUntilDestroy']));
    });
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DynamicLayoutComponent = /** @class */ (function () {
    function DynamicLayoutComponent(router, route, store) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.store = store;
        var _a = this.store.selectSnapshot(ConfigState.getAll), layouts = _a.requirements.layouts, routes = _a.routes;
        if ((this.route.snapshot.data || {}).layout) {
            this.layout = layouts
                .filter((/**
             * @param {?} l
             * @return {?}
             */
            function (l) { return !!l; }))
                .find((/**
             * @param {?} l
             * @return {?}
             */
            function (l) { return snq((/**
             * @return {?}
             */
            function () { return l.type.toLowerCase().indexOf(_this.route.snapshot.data.layout); }), -1) > -1; }));
        }
        this.router.events.pipe(takeUntilDestroy(this)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof NavigationEnd) {
                var segments = _this.router.parseUrl(event.url).root.children.primary.segments;
                /** @type {?} */
                var layout_1 = (_this.route.snapshot.data || {}).layout || findLayout(segments, routes);
                _this.layout = layouts
                    .filter((/**
                 * @param {?} l
                 * @return {?}
                 */
                function (l) { return !!l; }))
                    .find((/**
                 * @param {?} l
                 * @return {?}
                 */
                function (l) { return snq((/**
                 * @return {?}
                 */
                function () { return l.type.toLowerCase().indexOf(layout_1); }), -1) > -1; }));
            }
        }));
    }
    /**
     * @return {?}
     */
    DynamicLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    DynamicLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-dynamic-layout',
                    template: "\n    <ng-container *ngTemplateOutlet=\"layout ? componentOutlet : routerOutlet\"></ng-container>\n\n    <ng-template #routerOutlet><router-outlet></router-outlet></ng-template>\n    <ng-template #componentOutlet><ng-container *ngComponentOutlet=\"layout\"></ng-container></ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    DynamicLayoutComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: Store }
    ]; };
    __decorate([
        Select(ConfigState.getOne('requirements')),
        __metadata("design:type", Observable)
    ], DynamicLayoutComponent.prototype, "requirements$", void 0);
    return DynamicLayoutComponent;
}());
if (false) {
    /** @type {?} */
    DynamicLayoutComponent.prototype.requirements$;
    /** @type {?} */
    DynamicLayoutComponent.prototype.layout;
    /**
     * @type {?}
     * @private
     */
    DynamicLayoutComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DynamicLayoutComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    DynamicLayoutComponent.prototype.store;
}
/**
 * @param {?} segments
 * @param {?} routes
 * @return {?}
 */
function findLayout(segments, routes) {
    /** @type {?} */
    var layout = "empty" /* empty */;
    /** @type {?} */
    var route = routes
        .reduce((/**
     * @param {?} acc
     * @param {?} val
     * @return {?}
     */
    function (acc, val) { return (val.wrapper ? __spread(acc, val.children) : __spread(acc, [val])); }), [])
        .find((/**
     * @param {?} r
     * @return {?}
     */
    function (r) { return r.path === segments[0].path; }));
    if (route) {
        if (route.layout) {
            layout = route.layout;
        }
        if (route.children && route.children.length && segments.length > 1) {
            /** @type {?} */
            var child = route.children.find((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return c.path === segments[1].path; }));
            if (child && child.layout) {
                layout = child.layout;
            }
        }
    }
    return layout;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RouterOutletComponent = /** @class */ (function () {
    function RouterOutletComponent() {
    }
    RouterOutletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-router-outlet',
                    template: "\n    <router-outlet></router-outlet>\n  "
                }] }
    ];
    return RouterOutletComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(elRef) {
        this.elRef = elRef;
        this.delay = 0;
    }
    /**
     * @return {?}
     */
    AutofocusDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.elRef.nativeElement.focus(); }), this.delay);
    };
    AutofocusDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[autofocus]',
                },] }
    ];
    /** @nocollapse */
    AutofocusDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    AutofocusDirective.propDecorators = {
        delay: [{ type: Input, args: ['autofocus',] }]
    };
    return AutofocusDirective;
}());
if (false) {
    /** @type {?} */
    AutofocusDirective.prototype.delay;
    /**
     * @type {?}
     * @private
     */
    AutofocusDirective.prototype.elRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EllipsisDirective = /** @class */ (function () {
    function EllipsisDirective(cdRef, elRef) {
        this.cdRef = cdRef;
        this.elRef = elRef;
        this.enabled = true;
    }
    Object.defineProperty(EllipsisDirective.prototype, "inlineClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.enabled && this.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EllipsisDirective.prototype, "class", {
        get: /**
         * @return {?}
         */
        function () {
            return this.enabled && !this.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EllipsisDirective.prototype, "maxWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.enabled && this.width ? this.width || '170px' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    EllipsisDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var title = _this.title;
            _this.title = title || ((/** @type {?} */ (_this.elRef.nativeElement))).innerText;
            if (_this.title !== title) {
                _this.cdRef.detectChanges();
            }
        }), 0);
    };
    EllipsisDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[abpEllipsis]',
                },] }
    ];
    /** @nocollapse */
    EllipsisDirective.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    EllipsisDirective.propDecorators = {
        width: [{ type: Input, args: ['abpEllipsis',] }],
        title: [{ type: HostBinding, args: ['title',] }, { type: Input }],
        enabled: [{ type: Input, args: ['abpEllipsisEnabled',] }],
        inlineClass: [{ type: HostBinding, args: ['class.abp-ellipsis-inline',] }],
        class: [{ type: HostBinding, args: ['class.abp-ellipsis',] }],
        maxWidth: [{ type: HostBinding, args: ['style.max-width',] }]
    };
    return EllipsisDirective;
}());
if (false) {
    /** @type {?} */
    EllipsisDirective.prototype.width;
    /** @type {?} */
    EllipsisDirective.prototype.title;
    /** @type {?} */
    EllipsisDirective.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    EllipsisDirective.prototype.cdRef;
    /**
     * @type {?}
     * @private
     */
    EllipsisDirective.prototype.elRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AbpForContext = /** @class */ (function () {
    function AbpForContext($implicit, index, count, list) {
        this.$implicit = $implicit;
        this.index = index;
        this.count = count;
        this.list = list;
    }
    return AbpForContext;
}());
if (false) {
    /** @type {?} */
    AbpForContext.prototype.$implicit;
    /** @type {?} */
    AbpForContext.prototype.index;
    /** @type {?} */
    AbpForContext.prototype.count;
    /** @type {?} */
    AbpForContext.prototype.list;
}
var RecordView = /** @class */ (function () {
    function RecordView(record, view) {
        this.record = record;
        this.view = view;
    }
    return RecordView;
}());
if (false) {
    /** @type {?} */
    RecordView.prototype.record;
    /** @type {?} */
    RecordView.prototype.view;
}
var ForDirective = /** @class */ (function () {
    function ForDirective(tempRef, vcRef, differs) {
        this.tempRef = tempRef;
        this.vcRef = vcRef;
        this.differs = differs;
    }
    Object.defineProperty(ForDirective.prototype, "compareFn", {
        get: /**
         * @return {?}
         */
        function () {
            return this.compareBy || compare;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForDirective.prototype, "trackByFn", {
        get: /**
         * @return {?}
         */
        function () {
            return this.trackBy || ((/**
             * @param {?} index
             * @param {?} item
             * @return {?}
             */
            function (index, item) { return ((/** @type {?} */ (item))).id || index; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    ForDirective.prototype.iterateOverAppliedOperations = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        /** @type {?} */
        var rw = [];
        changes.forEachOperation((/**
         * @param {?} record
         * @param {?} previousIndex
         * @param {?} currentIndex
         * @return {?}
         */
        function (record, previousIndex, currentIndex) {
            if (record.previousIndex == null) {
                /** @type {?} */
                var view = _this.vcRef.createEmbeddedView(_this.tempRef, new AbpForContext(null, -1, -1, _this.items), currentIndex);
                rw.push(new RecordView(record, view));
            }
            else if (currentIndex == null) {
                _this.vcRef.remove(previousIndex);
            }
            else {
                /** @type {?} */
                var view = _this.vcRef.get(previousIndex);
                _this.vcRef.move(view, currentIndex);
                rw.push(new RecordView(record, (/** @type {?} */ (view))));
            }
        }));
        for (var i = 0, l = rw.length; i < l; i++) {
            rw[i].view.context.$implicit = rw[i].record.item;
        }
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    ForDirective.prototype.iterateOverAttachedViews = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        for (var i = 0, l = this.vcRef.length; i < l; i++) {
            /** @type {?} */
            var viewRef = (/** @type {?} */ (this.vcRef.get(i)));
            viewRef.context.index = i;
            viewRef.context.count = l;
            viewRef.context.list = this.items;
        }
        changes.forEachIdentityChange((/**
         * @param {?} record
         * @return {?}
         */
        function (record) {
            /** @type {?} */
            var viewRef = (/** @type {?} */ (_this.vcRef.get(record.currentIndex)));
            viewRef.context.$implicit = record.item;
        }));
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    ForDirective.prototype.projectItems = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        if (!items.length && this.emptyRef) {
            this.vcRef.createEmbeddedView(this.emptyRef).rootNodes;
            this.isShowEmptyRef = true;
            return;
        }
        if (this.emptyRef && this.isShowEmptyRef) {
            this.vcRef.clear();
            this.isShowEmptyRef = false;
        }
        if (!this.differ && items) {
            this.differ = this.differs.find(items).create(this.trackByFn);
        }
        if (this.differ) {
            /** @type {?} */
            var changes = this.differ.diff(items);
            if (changes) {
                this.iterateOverAppliedOperations(changes);
                this.iterateOverAttachedViews(changes);
            }
        }
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    ForDirective.prototype.sortItems = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        if (this.orderBy) {
            items.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return (a[_this.orderBy] > b[_this.orderBy] ? 1 : a[_this.orderBy] < b[_this.orderBy] ? -1 : 0); }));
        }
        else {
            items.sort();
        }
    };
    /**
     * @return {?}
     */
    ForDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var items = (/** @type {?} */ (clone(this.items)));
        if (!Array.isArray(items))
            return;
        /** @type {?} */
        var compareFn = this.compareFn;
        if (typeof this.filterBy !== 'undefined') {
            items = items.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return compareFn(item[_this.filterBy], _this.filterVal); }));
        }
        switch (this.orderDir) {
            case 'ASC':
                this.sortItems(items);
                this.projectItems(items);
                break;
            case 'DESC':
                this.sortItems(items);
                items.reverse();
                this.projectItems(items);
                break;
            default:
                this.projectItems(items);
        }
    };
    ForDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[abpFor]',
                },] }
    ];
    /** @nocollapse */
    ForDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: IterableDiffers }
    ]; };
    ForDirective.propDecorators = {
        items: [{ type: Input, args: ['abpForOf',] }],
        orderBy: [{ type: Input, args: ['abpForOrderBy',] }],
        orderDir: [{ type: Input, args: ['abpForOrderDir',] }],
        filterBy: [{ type: Input, args: ['abpForFilterBy',] }],
        filterVal: [{ type: Input, args: ['abpForFilterVal',] }],
        trackBy: [{ type: Input, args: ['abpForTrackBy',] }],
        compareBy: [{ type: Input, args: ['abpForCompareBy',] }],
        emptyRef: [{ type: Input, args: ['abpForEmptyRef',] }]
    };
    return ForDirective;
}());
if (false) {
    /** @type {?} */
    ForDirective.prototype.items;
    /** @type {?} */
    ForDirective.prototype.orderBy;
    /** @type {?} */
    ForDirective.prototype.orderDir;
    /** @type {?} */
    ForDirective.prototype.filterBy;
    /** @type {?} */
    ForDirective.prototype.filterVal;
    /** @type {?} */
    ForDirective.prototype.trackBy;
    /** @type {?} */
    ForDirective.prototype.compareBy;
    /** @type {?} */
    ForDirective.prototype.emptyRef;
    /**
     * @type {?}
     * @private
     */
    ForDirective.prototype.differ;
    /**
     * @type {?}
     * @private
     */
    ForDirective.prototype.isShowEmptyRef;
    /**
     * @type {?}
     * @private
     */
    ForDirective.prototype.tempRef;
    /**
     * @type {?}
     * @private
     */
    ForDirective.prototype.vcRef;
    /**
     * @type {?}
     * @private
     */
    ForDirective.prototype.differs;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function noop() {
    /** @type {?} */
    var fn = (/**
     * @return {?}
     */
    function () { });
    return fn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} a
 * @return {?}
 */
function uuid(a) {
    return a
        ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
        : ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormSubmitDirective = /** @class */ (function () {
    function FormSubmitDirective(formGroupDirective, host, cdRef) {
        this.formGroupDirective = formGroupDirective;
        this.host = host;
        this.cdRef = cdRef;
        this.ngSubmit = new EventEmitter();
        this.executedNgSubmit = false;
    }
    /**
     * @return {?}
     */
    FormSubmitDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formGroupDirective.ngSubmit.pipe(takeUntilDestroy(this)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.markAsDirty();
            _this.executedNgSubmit = true;
        }));
        fromEvent((/** @type {?} */ (this.host.nativeElement)), 'keyup')
            .pipe(debounceTime(200), filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return key && key.key === 'Enter'; })), takeUntilDestroy(this))
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (!_this.executedNgSubmit) {
                _this.host.nativeElement.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
            }
            _this.executedNgSubmit = false;
        }));
        fromEvent(this.host.nativeElement, 'submit')
            .pipe(takeUntilDestroy(this), filter((/**
         * @return {?}
         */
        function () { return !_this.notValidateOnSubmit && typeof _this.notValidateOnSubmit !== 'string'; })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (!_this.executedNgSubmit) {
                _this.markAsDirty();
            }
        }));
    };
    /**
     * @return {?}
     */
    FormSubmitDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    FormSubmitDirective.prototype.markAsDirty = /**
     * @return {?}
     */
    function () {
        var form = this.formGroupDirective.form;
        setDirty((/** @type {?} */ (form.controls)));
        form.markAsDirty();
        this.cdRef.detectChanges();
    };
    FormSubmitDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'form[ngSubmit][formGroup]',
                },] }
    ];
    /** @nocollapse */
    FormSubmitDirective.ctorParameters = function () { return [
        { type: FormGroupDirective, decorators: [{ type: Self }] },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    FormSubmitDirective.propDecorators = {
        notValidateOnSubmit: [{ type: Input }],
        ngSubmit: [{ type: Output }]
    };
    return FormSubmitDirective;
}());
if (false) {
    /** @type {?} */
    FormSubmitDirective.prototype.notValidateOnSubmit;
    /** @type {?} */
    FormSubmitDirective.prototype.ngSubmit;
    /** @type {?} */
    FormSubmitDirective.prototype.executedNgSubmit;
    /**
     * @type {?}
     * @private
     */
    FormSubmitDirective.prototype.formGroupDirective;
    /**
     * @type {?}
     * @private
     */
    FormSubmitDirective.prototype.host;
    /**
     * @type {?}
     * @private
     */
    FormSubmitDirective.prototype.cdRef;
}
/**
 * @param {?} controls
 * @return {?}
 */
function setDirty(controls) {
    if (Array.isArray(controls)) {
        controls.forEach((/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            setDirty((/** @type {?} */ (group.controls)));
        }));
        return;
    }
    Object.keys(controls).forEach((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        controls[key].markAsDirty();
        controls[key].updateValueAndValidity();
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PermissionDirective = /** @class */ (function () {
    function PermissionDirective(elRef, renderer, store) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.store = store;
    }
    /**
     * @return {?}
     */
    PermissionDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.condition) {
            this.store
                .select(ConfigState.getGrantedPolicy(this.condition))
                .pipe(takeUntilDestroy(this))
                .subscribe((/**
             * @param {?} isGranted
             * @return {?}
             */
            function (isGranted) {
                if (!isGranted) {
                    _this.renderer.removeChild(((/** @type {?} */ (_this.elRef.nativeElement))).parentElement, _this.elRef.nativeElement);
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    PermissionDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    PermissionDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[abpPermission]',
                },] }
    ];
    /** @nocollapse */
    PermissionDirective.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: Optional }] },
        { type: Renderer2 },
        { type: Store }
    ]; };
    PermissionDirective.propDecorators = {
        condition: [{ type: Input, args: ['abpPermission',] }]
    };
    return PermissionDirective;
}());
if (false) {
    /** @type {?} */
    PermissionDirective.prototype.condition;
    /**
     * @type {?}
     * @private
     */
    PermissionDirective.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    PermissionDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    PermissionDirective.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VisibilityDirective = /** @class */ (function () {
    function VisibilityDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.completed$ = new Subject();
    }
    /**
     * @return {?}
     */
    VisibilityDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var observer = new MutationObserver((/**
         * @param {?} mutations
         * @return {?}
         */
        function (mutations) {
            mutations.forEach((/**
             * @param {?} mutation
             * @return {?}
             */
            function (mutation) {
                if (!mutation.target)
                    return;
                /** @type {?} */
                var htmlNodes = snq((/**
                 * @return {?}
                 */
                function () { return Array.from(mutation.target.childNodes).filter((/**
                 * @param {?} node
                 * @return {?}
                 */
                function (node) { return node instanceof HTMLElement; })); }), []);
                if (!htmlNodes.length) {
                    _this.renderer.removeChild(_this.elRef.nativeElement.parentElement, _this.elRef.nativeElement);
                    _this.disconnect();
                }
                else {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.disconnect();
                    }), 0);
                }
            }));
        }));
        observer.observe(this.focusedElement, {
            childList: true,
        });
        this.completed$.subscribe((/**
         * @return {?}
         */
        function () { return observer.disconnect(); }));
    };
    /**
     * @return {?}
     */
    VisibilityDirective.prototype.disconnect = /**
     * @return {?}
     */
    function () {
        this.completed$.next();
        this.completed$.complete();
    };
    VisibilityDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[abpVisibility]',
                },] }
    ];
    /** @nocollapse */
    VisibilityDirective.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: Optional }] },
        { type: Renderer2 }
    ]; };
    VisibilityDirective.propDecorators = {
        focusedElement: [{ type: Input, args: ['abpVisibility',] }]
    };
    return VisibilityDirective;
}());
if (false) {
    /** @type {?} */
    VisibilityDirective.prototype.focusedElement;
    /** @type {?} */
    VisibilityDirective.prototype.completed$;
    /**
     * @type {?}
     * @private
     */
    VisibilityDirective.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    VisibilityDirective.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var eLayoutType = {
    account: 'account',
    application: 'application',
    empty: 'empty',
    setting: 'setting',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthGuard = /** @class */ (function () {
    function AuthGuard(oauthService, store) {
        this.oauthService = oauthService;
        this.store = store;
    }
    /**
     * @param {?} _
     * @param {?} state
     * @return {?}
     */
    AuthGuard.prototype.canActivate = /**
     * @param {?} _
     * @param {?} state
     * @return {?}
     */
    function (_, state) {
        /** @type {?} */
        var hasValidAccessToken = this.oauthService.hasValidAccessToken();
        if (hasValidAccessToken) {
            return hasValidAccessToken;
        }
        this.store.dispatch(new Navigate(['/account/login'], null, { state: { redirectUrl: state.url } }));
        return false;
    };
    AuthGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = function () { return [
        { type: OAuthService },
        { type: Store }
    ]; };
    /** @nocollapse */ AuthGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(ɵɵinject(OAuthService), ɵɵinject(Store)); }, token: AuthGuard, providedIn: "root" });
    return AuthGuard;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthGuard.prototype.oauthService;
    /**
     * @type {?}
     * @private
     */
    AuthGuard.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PermissionGuard = /** @class */ (function () {
    function PermissionGuard(store) {
        this.store = store;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    PermissionGuard.prototype.canActivate = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var data = _a.data;
        /** @type {?} */
        var resource = (/** @type {?} */ (data.requiredPolicy));
        return this.store.select(ConfigState.getGrantedPolicy(resource)).pipe(tap((/**
         * @param {?} access
         * @return {?}
         */
        function (access) {
            if (!access) {
                _this.store.dispatch(new RestOccurError({ status: 403 }));
            }
        })));
    };
    PermissionGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    PermissionGuard.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ PermissionGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function PermissionGuard_Factory() { return new PermissionGuard(ɵɵinject(Store)); }, token: PermissionGuard, providedIn: "root" });
    return PermissionGuard;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    PermissionGuard.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApiInterceptor = /** @class */ (function () {
    function ApiInterceptor(oAuthService, store) {
        this.oAuthService = oAuthService;
        this.store = store;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    ApiInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        this.store.dispatch(new StartLoader(request));
        /** @type {?} */
        var headers = (/** @type {?} */ ({}));
        /** @type {?} */
        var token = this.oAuthService.getAccessToken();
        if (!request.headers.has('Authorization') && token) {
            headers['Authorization'] = "Bearer " + token;
        }
        /** @type {?} */
        var lang = this.store.selectSnapshot(SessionState.getLanguage);
        if (!request.headers.has('Accept-Language') && lang) {
            headers['Accept-Language'] = lang;
        }
        /** @type {?} */
        var tenant = this.store.selectSnapshot(SessionState.getTenant);
        if (!request.headers.has('__tenant') && tenant) {
            headers['__tenant'] = tenant.id;
        }
        return next
            .handle(request.clone({
            setHeaders: headers,
        }))
            .pipe(finalize((/**
         * @return {?}
         */
        function () { return _this.store.dispatch(new StopLoader(request)); })));
    };
    ApiInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ApiInterceptor.ctorParameters = function () { return [
        { type: OAuthService },
        { type: Store }
    ]; };
    return ApiInterceptor;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApiInterceptor.prototype.oAuthService;
    /**
     * @type {?}
     * @private
     */
    ApiInterceptor.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApplicationConfiguration;
(function (ApplicationConfiguration) {
    /**
     * @record
     */
    function Response() { }
    ApplicationConfiguration.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.localization;
        /** @type {?} */
        Response.prototype.auth;
        /** @type {?} */
        Response.prototype.setting;
        /** @type {?} */
        Response.prototype.currentUser;
        /** @type {?} */
        Response.prototype.features;
    }
    /**
     * @record
     */
    function Localization() { }
    ApplicationConfiguration.Localization = Localization;
    if (false) {
        /** @type {?} */
        Localization.prototype.values;
        /** @type {?} */
        Localization.prototype.languages;
    }
    /**
     * @record
     */
    function LocalizationValue() { }
    ApplicationConfiguration.LocalizationValue = LocalizationValue;
    /**
     * @record
     */
    function Language() { }
    ApplicationConfiguration.Language = Language;
    if (false) {
        /** @type {?} */
        Language.prototype.cultureName;
        /** @type {?} */
        Language.prototype.uiCultureName;
        /** @type {?} */
        Language.prototype.displayName;
        /** @type {?} */
        Language.prototype.flagIcon;
    }
    /**
     * @record
     */
    function Auth() { }
    ApplicationConfiguration.Auth = Auth;
    if (false) {
        /** @type {?} */
        Auth.prototype.policies;
        /** @type {?} */
        Auth.prototype.grantedPolicies;
    }
    /**
     * @record
     */
    function Policy() { }
    ApplicationConfiguration.Policy = Policy;
    /**
     * @record
     */
    function Setting() { }
    ApplicationConfiguration.Setting = Setting;
    if (false) {
        /** @type {?} */
        Setting.prototype.values;
    }
    /**
     * @record
     */
    function CurrentUser() { }
    ApplicationConfiguration.CurrentUser = CurrentUser;
    if (false) {
        /** @type {?} */
        CurrentUser.prototype.isAuthenticated;
        /** @type {?} */
        CurrentUser.prototype.id;
        /** @type {?} */
        CurrentUser.prototype.tenantId;
        /** @type {?} */
        CurrentUser.prototype.userName;
    }
    /**
     * @record
     */
    function Features() { }
    ApplicationConfiguration.Features = Features;
    if (false) {
        /** @type {?} */
        Features.prototype.values;
    }
})(ApplicationConfiguration || (ApplicationConfiguration = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ABP;
(function (ABP) {
    /**
     * @record
     */
    function Root() { }
    ABP.Root = Root;
    if (false) {
        /** @type {?} */
        Root.prototype.environment;
        /** @type {?} */
        Root.prototype.requirements;
    }
    /**
     * @record
     * @template T
     */
    function PagedItemsResponse() { }
    ABP.PagedItemsResponse = PagedItemsResponse;
    if (false) {
        /** @type {?} */
        PagedItemsResponse.prototype.items;
    }
    /**
     * @record
     */
    function PageQueryParams() { }
    ABP.PageQueryParams = PageQueryParams;
    if (false) {
        /** @type {?|undefined} */
        PageQueryParams.prototype.filter;
        /** @type {?|undefined} */
        PageQueryParams.prototype.sorting;
        /** @type {?|undefined} */
        PageQueryParams.prototype.skipCount;
        /** @type {?|undefined} */
        PageQueryParams.prototype.maxResultCount;
    }
    /**
     * @record
     */
    function Route() { }
    ABP.Route = Route;
    if (false) {
        /** @type {?|undefined} */
        Route.prototype.children;
        /** @type {?|undefined} */
        Route.prototype.invisible;
        /** @type {?|undefined} */
        Route.prototype.layout;
        /** @type {?} */
        Route.prototype.name;
        /** @type {?|undefined} */
        Route.prototype.order;
        /** @type {?|undefined} */
        Route.prototype.parentName;
        /** @type {?} */
        Route.prototype.path;
        /** @type {?|undefined} */
        Route.prototype.requiredPolicy;
        /** @type {?|undefined} */
        Route.prototype.iconClass;
    }
    /**
     * @record
     */
    function FullRoute() { }
    ABP.FullRoute = FullRoute;
    if (false) {
        /** @type {?|undefined} */
        FullRoute.prototype.url;
        /** @type {?|undefined} */
        FullRoute.prototype.wrapper;
    }
    /**
     * @record
     */
    function BasicItem() { }
    ABP.BasicItem = BasicItem;
    if (false) {
        /** @type {?} */
        BasicItem.prototype.id;
        /** @type {?} */
        BasicItem.prototype.name;
    }
})(ABP || (ABP = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Config;
(function (Config) {
    /**
     * @record
     */
    function Environment() { }
    Config.Environment = Environment;
    if (false) {
        /** @type {?} */
        Environment.prototype.application;
        /** @type {?} */
        Environment.prototype.production;
        /** @type {?} */
        Environment.prototype.oAuthConfig;
        /** @type {?} */
        Environment.prototype.apis;
        /** @type {?} */
        Environment.prototype.localization;
    }
    /**
     * @record
     */
    function Application() { }
    Config.Application = Application;
    if (false) {
        /** @type {?} */
        Application.prototype.name;
        /** @type {?|undefined} */
        Application.prototype.logoUrl;
    }
    /**
     * @record
     */
    function Apis() { }
    Config.Apis = Apis;
    /**
     * @record
     */
    function Requirements() { }
    Config.Requirements = Requirements;
    if (false) {
        /** @type {?} */
        Requirements.prototype.layouts;
    }
})(Config || (Config = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Rest;
(function (Rest) {
    /**
     * @record
     */
    function Config() { }
    Rest.Config = Config;
    if (false) {
        /** @type {?|undefined} */
        Config.prototype.skipHandleError;
        /** @type {?|undefined} */
        Config.prototype.observe;
    }
    /**
     * @record
     * @template T
     */
    function Request() { }
    Rest.Request = Request;
    if (false) {
        /** @type {?|undefined} */
        Request.prototype.body;
        /** @type {?|undefined} */
        Request.prototype.headers;
        /** @type {?} */
        Request.prototype.method;
        /** @type {?|undefined} */
        Request.prototype.params;
        /** @type {?|undefined} */
        Request.prototype.reportProgress;
        /** @type {?|undefined} */
        Request.prototype.responseType;
        /** @type {?} */
        Request.prototype.url;
        /** @type {?|undefined} */
        Request.prototype.withCredentials;
    }
})(Rest || (Rest = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Session;
(function (Session) {
    /**
     * @record
     */
    function State() { }
    Session.State = State;
    if (false) {
        /** @type {?} */
        State.prototype.language;
        /** @type {?} */
        State.prototype.tenant;
    }
})(Session || (Session = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Profile;
(function (Profile) {
    /**
     * @record
     */
    function State() { }
    Profile.State = State;
    if (false) {
        /** @type {?} */
        State.prototype.profile;
    }
    /**
     * @record
     */
    function Response() { }
    Profile.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.userName;
        /** @type {?} */
        Response.prototype.email;
        /** @type {?} */
        Response.prototype.name;
        /** @type {?} */
        Response.prototype.surname;
        /** @type {?} */
        Response.prototype.phoneNumber;
    }
    /**
     * @record
     */
    function ChangePasswordRequest() { }
    Profile.ChangePasswordRequest = ChangePasswordRequest;
    if (false) {
        /** @type {?} */
        ChangePasswordRequest.prototype.currentPassword;
        /** @type {?} */
        ChangePasswordRequest.prototype.newPassword;
    }
})(Profile || (Profile = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NGXS_CONFIG_PLUGIN_OPTIONS = new InjectionToken('NGXS_CONFIG_PLUGIN_OPTIONS');
var ConfigPlugin = /** @class */ (function () {
    function ConfigPlugin(options, router) {
        this.options = options;
        this.router = router;
        this.initialized = false;
    }
    /**
     * @param {?} state
     * @param {?} event
     * @param {?} next
     * @return {?}
     */
    ConfigPlugin.prototype.handle = /**
     * @param {?} state
     * @param {?} event
     * @param {?} next
     * @return {?}
     */
    function (state, event, next) {
        /** @type {?} */
        var matches = actionMatcher(event);
        /** @type {?} */
        var isInitAction = matches(InitState) || matches(UpdateState);
        // const layouts = snq(() => this.options.requirements.layouts.filter(layout => layout instanceof Type), []);
        if (isInitAction && !this.initialized) {
            var _a = transformRoutes(this.router.config), routes = _a.routes, wrappers = _a.wrappers;
            routes = organizeRoutes(routes, wrappers);
            /** @type {?} */
            var flattedRoutes = flatRoutes(clone(routes));
            state = setValue(state, 'ConfigState', __assign({}, (state.ConfigState && __assign({}, state.ConfigState)), this.options, { routes: routes,
                flattedRoutes: flattedRoutes }));
            this.initialized = true;
        }
        return next(state, event);
    };
    ConfigPlugin.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [NGXS_CONFIG_PLUGIN_OPTIONS,] }] },
        { type: Router }
    ]; };
    return ConfigPlugin;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigPlugin.prototype.initialized;
    /**
     * @type {?}
     * @private
     */
    ConfigPlugin.prototype.options;
    /**
     * @type {?}
     * @private
     */
    ConfigPlugin.prototype.router;
}
/**
 * @param {?=} routes
 * @param {?=} wrappers
 * @return {?}
 */
function transformRoutes(routes, wrappers) {
    if (routes === void 0) { routes = []; }
    if (wrappers === void 0) { wrappers = []; }
    /** @type {?} */
    var abpRoutes = routes
        .filter((/**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return snq((/**
         * @return {?}
         */
        function () { return route.data.routes.routes.find((/**
         * @param {?} r
         * @return {?}
         */
        function (r) { return r.path === route.path; })); }), false);
    }))
        .reduce((/**
     * @param {?} acc
     * @param {?} val
     * @return {?}
     */
    function (acc, val) { return __spread(acc, val.data.routes.routes); }), []);
    wrappers = abpRoutes.filter((/**
     * @param {?} ar
     * @return {?}
     */
    function (ar) { return ar.wrapper; }));
    /** @type {?} */
    var transformed = (/** @type {?} */ ([]));
    routes
        .filter((/**
     * @param {?} route
     * @return {?}
     */
    function (route) { return (route.data || {}).routes && (route.component || route.loadChildren); }))
        .forEach((/**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        /** @type {?} */
        var abpPackage = abpRoutes.find((/**
         * @param {?} abp
         * @return {?}
         */
        function (abp) { return abp.path.toLowerCase() === route.path.toLowerCase() && snq((/**
         * @return {?}
         */
        function () { return route.data.routes.routes.length; }), false); }));
        var length = transformed.length;
        if (abpPackage) {
            transformed.push(abpPackage);
        }
        if (transformed.length === length) {
            transformed.push((/** @type {?} */ (__assign({}, route.data.routes, { path: route.path, name: snq((/**
                 * @return {?}
                 */
                function () { return route.data.routes.name; }), route.path), children: route.data.routes.children || [] }))));
        }
    }));
    return { routes: setUrls(transformed), wrappers: wrappers };
}
/**
 * @param {?} routes
 * @param {?=} parentUrl
 * @return {?}
 */
function setUrls(routes, parentUrl) {
    if (parentUrl) {
        // this if block using for only recursive call
        return routes.map((/**
         * @param {?} route
         * @return {?}
         */
        function (route) { return (__assign({}, route, { url: parentUrl + "/" + route.path }, (route.children &&
            route.children.length && {
            children: setUrls(route.children, parentUrl + "/" + route.path),
        }))); }));
    }
    return routes.map((/**
     * @param {?} route
     * @return {?}
     */
    function (route) { return (__assign({}, route, { url: "/" + route.path }, (route.children &&
        route.children.length && {
        children: setUrls(route.children, "/" + route.path),
    }))); }));
}
/**
 * @param {?} routes
 * @return {?}
 */
function flatRoutes(routes) {
    /** @type {?} */
    var flat = (/**
     * @param {?} r
     * @return {?}
     */
    function (r) {
        return r.reduce((/**
         * @param {?} acc
         * @param {?} val
         * @return {?}
         */
        function (acc, val) {
            /** @type {?} */
            var value = [val];
            if (val.children) {
                var children = val.children;
                delete val.children;
                value = __spread([val], flat(children));
            }
            return __spread(acc, value);
        }), []);
    });
    return flat(routes);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConfigService = /** @class */ (function () {
    function ConfigService(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ConfigService.prototype.getAll = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(ConfigState.getAll);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    ConfigService.prototype.getOne = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.store.selectSnapshot(ConfigState.getOne(key));
    };
    /**
     * @param {?} keys
     * @return {?}
     */
    ConfigService.prototype.getDeep = /**
     * @param {?} keys
     * @return {?}
     */
    function (keys) {
        return this.store.selectSnapshot(ConfigState.getDeep(keys));
    };
    /**
     * @param {?} key
     * @return {?}
     */
    ConfigService.prototype.getSetting = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.store.selectSnapshot(ConfigState.getSetting(key));
    };
    ConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ ConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(ɵɵinject(Store)); }, token: ConfigService, providedIn: "root" });
    return ConfigService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LazyLoadService = /** @class */ (function () {
    function LazyLoadService() {
        this.loadedLibraries = {};
    }
    /**
     * @param {?} url
     * @param {?} type
     * @param {?=} content
     * @param {?=} targetQuery
     * @param {?=} position
     * @return {?}
     */
    LazyLoadService.prototype.load = /**
     * @param {?} url
     * @param {?} type
     * @param {?=} content
     * @param {?=} targetQuery
     * @param {?=} position
     * @return {?}
     */
    function (url, type, content, targetQuery, position) {
        var _this = this;
        if (content === void 0) { content = ''; }
        if (targetQuery === void 0) { targetQuery = 'body'; }
        if (position === void 0) { position = 'afterend'; }
        if (!url && !content)
            return;
        /** @type {?} */
        var key = url ? url.slice(url.lastIndexOf('/') + 1) : uuid();
        if (this.loadedLibraries[key]) {
            return this.loadedLibraries[key].asObservable();
        }
        this.loadedLibraries[key] = new ReplaySubject();
        /** @type {?} */
        var library;
        if (type === 'script') {
            library = document.createElement('script');
            library.type = 'text/javascript';
            if (url) {
                ((/** @type {?} */ (library))).src = url;
            }
            ((/** @type {?} */ (library))).text = content;
        }
        else if (url) {
            library = document.createElement('link');
            library.type = 'text/css';
            ((/** @type {?} */ (library))).rel = 'stylesheet';
            if (url) {
                ((/** @type {?} */ (library))).href = url;
            }
        }
        else {
            library = document.createElement('style');
            ((/** @type {?} */ (library))).textContent = content;
        }
        library.onload = (/**
         * @return {?}
         */
        function () {
            _this.loadedLibraries[key].next();
            _this.loadedLibraries[key].complete();
        });
        document.querySelector(targetQuery).insertAdjacentElement(position, library);
        return this.loadedLibraries[key].asObservable();
    };
    LazyLoadService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ LazyLoadService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LazyLoadService_Factory() { return new LazyLoadService(); }, token: LazyLoadService, providedIn: "root" });
    return LazyLoadService;
}());
if (false) {
    /** @type {?} */
    LazyLoadService.prototype.loadedLibraries;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} environment
 * @return {?}
 */
function environmentFactory(environment) {
    return __assign({}, environment);
}
/**
 * @param {?} config
 * @return {?}
 */
function configFactory(config) {
    return __assign({}, config);
}
/** @type {?} */
var ENVIRONMENT = new InjectionToken('ENVIRONMENT');
/** @type {?} */
var CONFIG = new InjectionToken('CONFIG');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputEventDebounceDirective = /** @class */ (function () {
    function InputEventDebounceDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.debounce = 300;
        this.debounceEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    InputEventDebounceDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        fromEvent(this.el.nativeElement, 'input')
            .pipe(debounceTime(this.debounce), takeUntilDestroy$1(this))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.debounceEvent.emit(event);
        }));
    };
    InputEventDebounceDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[input.debounce]',
                },] }
    ];
    /** @nocollapse */
    InputEventDebounceDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    InputEventDebounceDirective.propDecorators = {
        debounce: [{ type: Input }],
        debounceEvent: [{ type: Output, args: ['input.debounce',] }]
    };
    return InputEventDebounceDirective;
}());
if (false) {
    /** @type {?} */
    InputEventDebounceDirective.prototype.debounce;
    /** @type {?} */
    InputEventDebounceDirective.prototype.debounceEvent;
    /**
     * @type {?}
     * @private
     */
    InputEventDebounceDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    InputEventDebounceDirective.prototype.el;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ClickEventStopPropagationDirective = /** @class */ (function () {
    function ClickEventStopPropagationDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.stopPropEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ClickEventStopPropagationDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        fromEvent(this.el.nativeElement, 'click')
            .pipe(takeUntilDestroy$1(this))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.stopPropagation();
            _this.stopPropEvent.emit(event);
        }));
    };
    ClickEventStopPropagationDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[click.stop]',
                },] }
    ];
    /** @nocollapse */
    ClickEventStopPropagationDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    ClickEventStopPropagationDirective.propDecorators = {
        stopPropEvent: [{ type: Output, args: ['click.stop',] }]
    };
    return ClickEventStopPropagationDirective;
}());
if (false) {
    /** @type {?} */
    ClickEventStopPropagationDirective.prototype.stopPropEvent;
    /**
     * @type {?}
     * @private
     */
    ClickEventStopPropagationDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ClickEventStopPropagationDirective.prototype.el;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocalizationPipe = /** @class */ (function () {
    function LocalizationPipe(store) {
        this.store = store;
        this.initialValue = '';
        this.destroy$ = new Subject();
    }
    /**
     * @param {?=} value
     * @param {...?} interpolateParams
     * @return {?}
     */
    LocalizationPipe.prototype.transform = /**
     * @param {?=} value
     * @param {...?} interpolateParams
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (value === void 0) { value = ''; }
        var interpolateParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            interpolateParams[_i - 1] = arguments[_i];
        }
        if (this.initialValue !== value) {
            this.initialValue = value;
            this.destroy$.next();
            this.store
                .select(ConfigState.getCopy.apply(ConfigState, __spread([value], interpolateParams.reduce((/**
             * @param {?} acc
             * @param {?} val
             * @return {?}
             */
            function (acc, val) { return (Array.isArray(val) ? __spread(acc, val) : __spread(acc, [val])); }), []))))
                .pipe(takeUntil(this.destroy$), takeUntilDestroy(this), distinctUntilChanged())
                .subscribe((/**
             * @param {?} copy
             * @return {?}
             */
            function (copy) { return (_this.value = copy); }));
        }
        return this.value;
    };
    /**
     * @return {?}
     */
    LocalizationPipe.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    LocalizationPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'abpLocalization',
                    pure: false,
                },] }
    ];
    /** @nocollapse */
    LocalizationPipe.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return LocalizationPipe;
}());
if (false) {
    /** @type {?} */
    LocalizationPipe.prototype.initialValue;
    /** @type {?} */
    LocalizationPipe.prototype.value;
    /** @type {?} */
    LocalizationPipe.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    LocalizationPipe.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LocaleId = /** @class */ (function (_super) {
    __extends(LocaleId, _super);
    function LocaleId(localizationService) {
        var _this = _super.call(this) || this;
        _this.localizationService = localizationService;
        return _this;
    }
    /**
     * @return {?}
     */
    LocaleId.prototype.toString = /**
     * @return {?}
     */
    function () {
        var currentLang = this.localizationService.currentLang;
        return localesMapping[currentLang] || currentLang;
    };
    /**
     * @return {?}
     */
    LocaleId.prototype.valueOf = /**
     * @return {?}
     */
    function () {
        return this.toString();
    };
    return LocaleId;
}(String));
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocaleId.prototype.localizationService;
}
/** @type {?} */
var LocaleProvider = {
    provide: LOCALE_ID,
    useClass: LocaleId,
    deps: [LocalizationService],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    CoreModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = (/** @type {?} */ ({})); }
        return {
            ngModule: CoreModule,
            providers: [
                LocaleProvider,
                {
                    provide: NGXS_PLUGINS,
                    useClass: ConfigPlugin,
                    multi: true,
                },
                {
                    provide: NGXS_CONFIG_PLUGIN_OPTIONS,
                    useValue: options,
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ApiInterceptor,
                    multi: true,
                },
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [Injector],
                    useFactory: getInitialData,
                },
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [Injector],
                    useFactory: localeInitializer,
                },
            ],
        };
    };
    CoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NgxsModule.forFeature([ProfileState, SessionState, ConfigState]),
                        NgxsStoragePluginModule.forRoot({ key: 'SessionState' }),
                        NgxsRouterPluginModule.forRoot(),
                        CommonModule,
                        HttpClientModule,
                        FormsModule,
                        ReactiveFormsModule,
                        RouterModule,
                    ],
                    declarations: [
                        RouterOutletComponent,
                        DynamicLayoutComponent,
                        AutofocusDirective,
                        EllipsisDirective,
                        ForDirective,
                        FormSubmitDirective,
                        LocalizationPipe,
                        PermissionDirective,
                        VisibilityDirective,
                        InputEventDebounceDirective,
                        ClickEventStopPropagationDirective,
                    ],
                    exports: [
                        CommonModule,
                        HttpClientModule,
                        FormsModule,
                        ReactiveFormsModule,
                        RouterModule,
                        RouterOutletComponent,
                        DynamicLayoutComponent,
                        AutofocusDirective,
                        EllipsisDirective,
                        ForDirective,
                        FormSubmitDirective,
                        LocalizationPipe,
                        PermissionDirective,
                        VisibilityDirective,
                        InputEventDebounceDirective,
                        LocalizationPipe,
                        ClickEventStopPropagationDirective,
                    ],
                    providers: [LocalizationPipe],
                    entryComponents: [RouterOutletComponent, DynamicLayoutComponent],
                },] }
    ];
    return CoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ApiInterceptor, ApplicationConfigurationService, AuthGuard, AutofocusDirective, CONFIG, ChangePassword, ConfigPlugin, ConfigService, ConfigState, CoreModule, DynamicLayoutComponent, ENVIRONMENT, EllipsisDirective, ForDirective, FormSubmitDirective, GetAppConfiguration, GetProfile, LazyLoadService, LocalizationService, NGXS_CONFIG_PLUGIN_OPTIONS, PatchRouteByName, PermissionDirective, PermissionGuard, ProfileService, ProfileState, Rest, RestOccurError, RestService, RouterOutletComponent, SessionState, SetLanguage, SetTenant, StartLoader, StopLoader, UpdateProfile, VisibilityDirective, configFactory, environmentFactory, getInitialData, localeInitializer, noop, organizeRoutes, registerLocale, setChildRoute, sortRoutes, takeUntilDestroy, uuid, ProfileState as ɵa, ProfileService as ɵb, ClickEventStopPropagationDirective as ɵba, LocaleId as ɵbb, LocaleProvider as ɵbc, NGXS_CONFIG_PLUGIN_OPTIONS as ɵbd, ConfigPlugin as ɵbe, ApiInterceptor as ɵbf, getInitialData as ɵbg, localeInitializer as ɵbh, RestService as ɵc, GetProfile as ɵd, UpdateProfile as ɵe, ChangePassword as ɵf, SessionState as ɵh, LocalizationService as ɵi, SetLanguage as ɵj, SetTenant as ɵk, ConfigState as ɵm, ApplicationConfigurationService as ɵn, PatchRouteByName as ɵo, GetAppConfiguration as ɵp, RouterOutletComponent as ɵq, DynamicLayoutComponent as ɵr, AutofocusDirective as ɵs, EllipsisDirective as ɵt, ForDirective as ɵu, FormSubmitDirective as ɵv, LocalizationPipe as ɵw, PermissionDirective as ɵx, VisibilityDirective as ɵy, InputEventDebounceDirective as ɵz };
//# sourceMappingURL=abp-ng.core.js.map
