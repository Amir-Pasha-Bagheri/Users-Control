const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize (passport, getUserByUsername) {

    const authenticateUser = (username,password,done) =>{
        const user = getUserByUsername(username)
        if(!user) return done(null,false,{message: 'No User With Given Username'})
        else{
            try {
                if(await bcrypt.compare(password,user.password)) return done(null, user)
                else return done(null,false,{message:'Password Incorrect'})
            } catch (e) {
                return done(e)
            }
        }
    }

    passport.use(new localStrategy(authenticateUser))
    passport.serializeUser((user,done)=>{})
    passport.deserializeUser((id,done)=>{})
}

module.exports = initialize