const UserControllers = 
require('./controllers/UserControllers')

module.exports = (app) => {
    /* RESFUL Api for users management */
    // create user
    app.post('/user' , 
        UserControllers.create
    )

    // edit user , susped, active
    app.put('/user/:userId',
        UserControllers.put
    )

    // delete user
    app.delete('/user/:userId',
        UserControllers.remove
    )

    // get user by id
    app.get('user/:userId',
        UserControllers.show)

    //get all user
    app.get('/users',
        UserControllers.index
    )
}