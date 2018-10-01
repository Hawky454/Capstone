{/* <div>
          <NavBar />
          <div className={classes.SignIn}>
            <form>
                <label htmlFor="email" className={classes.emailLabel}>Email:
                <input 
                    type="email" 
                    name="email" 
                    autoComplete="email" 
                    placeholder="Email" 
                    value={this.state.name} 
                    onChange={(event) => this.handleUserInput(event)}
                    />
                </label>
                <label htmlFor="password">Password: 
                <input 
                    type="password" 
                    name="password" 
                    autoComplete="password" 
                    placeholder="Password"
                    // onChange={(event) => this.handleUserInput(event)}
                    // value={this.state.password} 
                    />
                </label>
            <section className={classes.btn}>
                <button>Sign In</button>
            </section>
            </form>
          </div>
          <Footer />
        </div> */}

        /* alternative to #f7f7df ... replace all those colors back with baby blue: #a1dbff */

// .SignIn {
//     display: flex;
//     margin: 225px auto;
//     border: 2px solid black;
//     border-radius: 5px;
//     width: 400px;
//     height: 300px;
//     padding: 20px;
//     background-color: rgba(0,0,0, 0.7);
//     text-shadow: 2px 2px grey;

// }

// .SignIn input {
//     width: 250px;
//     height: 40px;
//     margin: 20px;
//     border-radius: 5px;
//     font-size: 20px;
//     background: #f0f9ff; 
//     background: -moz-linear-gradient(top, #f0f9ff 0%, #f7f7df 47%, #f7f7df 100%); 
//     background: -webkit-linear-gradient(top, #f0f9ff 0%,#f7f7df 47%,#f7f7df 100%); 
//     background: linear-gradient(to bottom, #f0f9ff 0%,#f7f7df 47%,#f7f7df 100%); 
//     filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f0f9ff', endColorstr='#f7f7df',GradientType=0 ); 
// }

// .SignIn button {
//     width: 252px;
//     height: 50px;
//     font-size: 20px;
//     border-radius: 5px;
//     /* border: 1px solid black; */
//     margin-top: 30px;
//     margin-left: 113px;
//     cursor: pointer;
//     font-family: 'Cormorant Unicase', serif;
//     background: #f0f9ff; 
//     background: -moz-linear-gradient(top, #f0f9ff 0%, #f7f7df 47%, #f7f7df 100%); 
//     background: -webkit-linear-gradient(top, #f0f9ff 0%,#f7f7df 47%,#f7f7df 100%); 
//     background: linear-gradient(to bottom, #f0f9ff 0%,#f7f7df 47%,#f7f7df 100%); 
//     filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f0f9ff', endColorstr='#f7f7df',GradientType=0 ); 
// }

// .SignIn:hover {
//     transform: scale(0.98); 

// } 


// .SignIn label {
//     font-weight: bolder;
//     font-size: 20px;
//     color: #f7f7df;
// }

/* the below is just so that the email and password inputs align properly 31px (still looks a bit off) */
// .emailLabel {
//     margin-left: 1.6em;
// }