import express from "express";

const pagesrouter = express.Router();

pagesrouter.get('/', (req, res) => {
    res.render('index');
})
pagesrouter.get('/register', (req, res) => {
    res.render('register');
})
pagesrouter.get('/login', (req, res) => {
    res.render("login")
})

pagesrouter.get("/booking", (req, res) => {
    res.render("booking")

})

pagesrouter.get("/doctor-register", (req, res) => {
    res.render("doctor-register")

})
pagesrouter.get("/medical-records", (req, res) => {
    res.render("medical-records")

})

pagesrouter.get("/medical-details", (req, res) => {
    res.render("medical-details")

})
pagesrouter.get("/hospitals", (req, res) => {
    res.render("doctor-profile")

})
pagesrouter.get("/Bookingappointm", (req, res) => {
    res.render("Bookingappointm")
})

pagesrouter.get("/appointments", (req, res) => {
    res.render("appointments")
})

pagesrouter.get('/my-patients', (req, res) => {
    res.render("my-patients")
})

pagesrouter.get('/schedule-timings', (req, res) => {
    res.render("schedule-timings")
})

pagesrouter.get('/available-timings', (req, res) => {
    res.render("available-timings")
})


pagesrouter.get('/hospitalusers/doctor-register', (req, res) => {
    res.render("doctor-dashboard")
})
pagesrouter.get('/hospitalusers/signin', (req, res) => {
    res.render("doctor-dashboard")
})

pagesrouter.get("/records", (req, res) => {
    res.render("records")

})
pagesrouter.get("/booking-success"), (req, res) => {
    res.render("booking-success")
}

pagesrouter.get("/doctor-login"), (req, res) => {
    try {
        res.render("doctor-login")

    } catch (error) {
        console.log(error)
    }

}
pagesrouter.get("/upload-Success"), (req, res) => {
    res.render("upload-success")
}

pagesrouter.get("/dlogin"), (req, res) => {
    res.render("dlogin")
}

export default pagesrouter;