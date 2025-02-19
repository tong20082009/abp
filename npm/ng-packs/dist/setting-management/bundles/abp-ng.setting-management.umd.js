(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@abp/ng.theme.shared'), require('@angular/core'), require('@angular/router'), require('rxjs'), require('@ngxs/router-plugin'), require('@ngxs/store'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@abp/ng.setting-management', ['exports', '@abp/ng.core', '@abp/ng.theme.shared', '@angular/core', '@angular/router', 'rxjs', '@ngxs/router-plugin', '@ngxs/store', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.abp = global.abp || {}, global.abp.ng = global.abp.ng || {}, global.abp.ng['setting-management'] = {}), global.ng_core, global.ng_theme_shared, global.ng.core, global.ng.router, global.rxjs, global.routerPlugin, global.store, global.rxjs.operators));
}(this, function (exports, ng_core, ng_theme_shared, core, router, rxjs, routerPlugin, store, operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SettingManagementService = /** @class */ (function () {
        function SettingManagementService(router$1, store) {
            var _this = this;
            this.router = router$1;
            this.store = store;
            this.settings = [];
            this.selected = (/** @type {?} */ ({}));
            this.destroy$ = new rxjs.Subject();
            /** @type {?} */
            var timeout;
            this.router.events
                .pipe(operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event instanceof router.RouteConfigLoadEnd; })), operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (timeout) {
                    timeout.unsubscribe();
                    _this.destroy$.next();
                }
                timeout = rxjs.timer(150).subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.setSettings();
                }));
            }));
        }
        /**
         * @return {?}
         */
        SettingManagementService.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
        };
        /**
         * @return {?}
         */
        SettingManagementService.prototype.setSettings = /**
         * @return {?}
         */
        function () {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var route = _this.router.config.find((/**
                 * @param {?} r
                 * @return {?}
                 */
                function (r) { return r.path === 'setting-management'; }));
                _this.settings = route.data.settings.sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                function (a, b) { return a.order - b.order; }));
                _this.checkSelected();
            }), 0);
        };
        /**
         * @return {?}
         */
        SettingManagementService.prototype.checkSelected = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.selected = this.settings.find((/**
             * @param {?} setting
             * @return {?}
             */
            function (setting) { return setting.url === _this.router.url; })) || ((/** @type {?} */ ({})));
            if (!this.selected.name && this.settings.length) {
                this.setSelected(this.settings[0]);
            }
        };
        /**
         * @param {?} selected
         * @return {?}
         */
        SettingManagementService.prototype.setSelected = /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            this.selected = selected;
            this.store.dispatch(new routerPlugin.Navigate([selected.url]));
        };
        SettingManagementService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        SettingManagementService.ctorParameters = function () { return [
            { type: router.Router },
            { type: store.Store }
        ]; };
        /** @nocollapse */ SettingManagementService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SettingManagementService_Factory() { return new SettingManagementService(core.ɵɵinject(router.Router), core.ɵɵinject(store.Store)); }, token: SettingManagementService, providedIn: "root" });
        return SettingManagementService;
    }());
    if (false) {
        /** @type {?} */
        SettingManagementService.prototype.settings;
        /** @type {?} */
        SettingManagementService.prototype.selected;
        /**
         * @type {?}
         * @private
         */
        SettingManagementService.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        SettingManagementService.prototype.router;
        /**
         * @type {?}
         * @private
         */
        SettingManagementService.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SettingLayoutComponent = /** @class */ (function () {
        function SettingLayoutComponent(settingManagementService, router) {
            this.settingManagementService = settingManagementService;
            this.router = router;
            this.trackByFn = (/**
             * @param {?} _
             * @param {?} item
             * @return {?}
             */
            function (_, item) { return item.name; });
            if (settingManagementService.selected &&
                this.router.url !== settingManagementService.selected.url &&
                settingManagementService.settings.length) {
                settingManagementService.setSelected(settingManagementService.settings[0]);
            }
        }
        /**
         * @return {?}
         */
        SettingLayoutComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        SettingLayoutComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            rxjs.timer(250).subscribe((/**
             * @return {?}
             */
            function () {
                if (!_this.settingManagementService.settings.length) {
                    _this.settingManagementService.setSettings();
                }
            }));
        };
        // required for dynamic component
        SettingLayoutComponent.type = "setting" /* setting */;
        SettingLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'abp-setting-layout',
                        template: "<div class=\"row entry-row\">\n  <div class=\"col-auto\">\n    <h1 class=\"content-header-title\">{{ 'AbpSettingManagement::Settings' | abpLocalization }}</h1>\n  </div>\n  <!-- <div id=\"breadcrumb\" class=\"col-md-auto pl-md-0\">\n    <abp-breadcrumb></abp-breadcrumb>\n  </div> -->\n  <div class=\"col\">\n    <div class=\"text-lg-right pt-2\" id=\"AbpContentToolbar\"></div>\n  </div>\n</div>\n\n<div id=\"SettingManagementWrapper\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div *ngIf=\"!settingManagementService.settings.length\" class=\"text-center\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-3\">\n          <ul class=\"nav flex-column nav-pills\" id=\"nav-tab\" role=\"tablist\">\n            <li\n              *abpFor=\"\n                let setting of settingManagementService.settings;\n                trackBy: trackByFn;\n                orderBy: 'order';\n                orderDir: 'ASC'\n              \"\n              (click)=\"settingManagementService.setSelected(setting)\"\n              class=\"nav-item\"\n              [abpPermission]=\"setting.requiredPolicy\"\n            >\n              <a\n                class=\"nav-link\"\n                [id]=\"setting.name + '-tab'\"\n                role=\"tab\"\n                [class.active]=\"setting.name === settingManagementService.selected.name\"\n                >{{ setting.name | abpLocalization }}</a\n              >\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-9\">\n          <div *ngIf=\"settingManagementService.settings.length\" class=\"tab-content\">\n            <div\n              class=\"tab-pane fade show active\"\n              [id]=\"settingManagementService.selected.name + '-tab'\"\n              role=\"tabpanel\"\n            >\n              <h2>{{ settingManagementService.selected.name | abpLocalization }}</h2>\n              <hr class=\"my-4\" />\n              <router-outlet></router-outlet>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        SettingLayoutComponent.ctorParameters = function () { return [
            { type: SettingManagementService },
            { type: router.Router }
        ]; };
        return SettingLayoutComponent;
    }());
    if (false) {
        /** @type {?} */
        SettingLayoutComponent.type;
        /** @type {?} */
        SettingLayoutComponent.prototype.trackByFn;
        /** @type {?} */
        SettingLayoutComponent.prototype.settingManagementService;
        /**
         * @type {?}
         * @private
         */
        SettingLayoutComponent.prototype.router;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SETTING_MANAGEMENT_ROUTES = {
        routes: (/** @type {?} */ ([
            {
                name: 'Settings',
                path: 'setting-management',
                parentName: 'AbpUiNavigation::Menu:Administration',
                layout: "application" /* application */,
                order: 6,
                iconClass: 'fa fa-cog',
            },
        ])),
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = { routes: SETTING_MANAGEMENT_ROUTES, settings: [] };
    /** @type {?} */
    var routes = [
        {
            path: 'setting-management',
            component: ng_core.DynamicLayoutComponent,
            children: [{ path: '', component: SettingLayoutComponent }],
            data: ɵ0,
        },
    ];
    var SettingManagementRoutingModule = /** @class */ (function () {
        function SettingManagementRoutingModule() {
        }
        SettingManagementRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes)],
                        exports: [router.RouterModule],
                    },] }
        ];
        return SettingManagementRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SETTING_LAYOUT = SettingLayoutComponent;
    var SettingManagementModule = /** @class */ (function () {
        function SettingManagementModule() {
        }
        SettingManagementModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [SETTING_LAYOUT],
                        imports: [SettingManagementRoutingModule, ng_core.CoreModule, ng_theme_shared.ThemeSharedModule],
                        entryComponents: [SETTING_LAYOUT],
                    },] }
        ];
        return SettingManagementModule;
    }());

    exports.SETTING_LAYOUT = SETTING_LAYOUT;
    exports.SETTING_MANAGEMENT_ROUTES = SETTING_MANAGEMENT_ROUTES;
    exports.SettingLayoutComponent = SettingLayoutComponent;
    exports.SettingManagementModule = SettingManagementModule;
    exports.ɵa = SettingManagementService;
    exports.ɵb = SettingManagementRoutingModule;
    exports.ɵc = SETTING_MANAGEMENT_ROUTES;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=abp-ng.setting-management.umd.js.map
