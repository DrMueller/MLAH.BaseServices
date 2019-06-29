export function AutoUnsubscribe(...blackListSubscriptionPropertyNames: string[]) {
    return function (component: any) {
        const originalDestroy = component.prototype.ngOnDestroy;

        component.prototype.ngOnDestroy = function () {
            Object.keys(this).forEach(propKey => {
                const property = this[propKey];

                if (blackListSubscriptionPropertyNames.indexOf(propKey) === -1) {
                    if (property && typeof property.unsubscribe === 'function') {
                        property.unsubscribe();
                    }
                }
            });

            if (originalDestroy && typeof originalDestroy === 'function') {
                originalDestroy.apply(this, arguments);
            }
        };
    };
}
