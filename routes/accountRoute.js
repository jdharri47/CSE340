// Needed Resources 
const express = require("express")
const router = new express.Router() 
const accountController = require("../controllers/accountController")
const utilities = require("../utilities/")
const regValidate = require('../utilities/account-validation')

// Route for the login veiw
router.get("/login", utilities.handleErrors(accountController.buildLogin))

// Route for the registration view
router.get("/register", utilities.handleErrors(accountController.buildRegister))

// Process the registration data
router.post(
    "/register",
    regValidate.registationRules(),
    regValidate.checkRegData,
    utilities.handleErrors(accountController.registerAccount)
)

// Process the login attempt
router.post(
    "/login",
    //regValidate.loginRules(),
    //regValidate.checkLoginData,
    utilities.handleErrors(accountController.accountLogin)
)

// Management view
router.get("/", utilities.checkLogin, utilities.handleErrors(accountController.buildManagementView))

// export the router
module.exports = router