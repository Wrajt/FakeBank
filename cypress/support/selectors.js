export const userSelectors = {
    customerLogin: '.borderM > :nth-child(1) > .btn',
    home: '.home',
    userSelect: '#userSelect',
    loginButton: 'form.ng-valid > .btn',
    logoutButton: '.logout',
    nameBanner: '.fontBig',
    accountSelect: '#accountSelect',
    accountNumber: '.borderM > :nth-child(3) > :nth-child(1)',
    transactionsButton: '[ng-class="btnClass1"]',
    depositButton: '[ng-class="btnClass2"]',
    ammountInput: '.form-control',
    addDeposit: 'form.ng-dirty > .btn',
    changeBalanceMessage: '.error',
    withdrawalButton: '[ng-class="btnClass3"]',
    currentBalance:'.borderM > :nth-child(3) > :nth-child(2)',
    backButton: '.fixedTopBox > [style="float:left"]',

}

export const managerSelectors = {
    managerLogin: ':nth-child(3) > .btn',
    addCustomer: '[ng-class="btnClass1"]',
    firstName: ':nth-child(1) > .form-control',
    lastName: ':nth-child(2) > .form-control',
    postCode: ':nth-child(3) > .form-control',
    addCustomerButton: 'form.ng-dirty > .btn',
    openAccount: '[ng-class="btnClass2"]',
    customerList: '[ng-class="btnClass3"]',

}