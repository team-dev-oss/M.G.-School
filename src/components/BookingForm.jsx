"use client"
import { addBooking } from "@/lib/actions";
export default function Page() {
    const FormSubmit = ()=>(
        alert("Booking Created successfully")
       
      )
    return (
        <div className="  items-center p-4 md:p-8 rounded-2xl shadow-md mt-10 mx-auto"
              style={{
                background: "rgba(0, 0, 0, 0.20)",
                backdropFilter: "blur(10px)",
                maxWidth: "400px", // Restrict maximum width
              }}
            >
              <div className="text-center">
                <h1 className="text-2xl font-bold text-blue-600">
                  Book a Live Class, For Free!
                </h1>
              </div>
              <form
                action={addBooking}
                className="mt-4 md:mt-8 space-y-4 md:space-y-6"
              >
                <div></div>
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full rounded-lg border-gray-200 p-2 md:p-4 text-sm shadow-sm"
                    placeholder="Enter Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded-lg border-gray-200 p-2 md:p-4 text-sm shadow-sm"
                    placeholder="Enter Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full rounded-lg border-gray-200 p-2 md:p-4 text-sm shadow-sm"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={() => FormSubmit()}
                  className="w-full py-2 md:py-3 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600"
                >
                  Continue Booking Live Class
                </button>
              </form>
              {/* <div className="text-center">
              Already have an account? <span> <LoginLink className="inline-block rounded-lg  px-1 py-3 text-sm font-medium text-red-500">Click here</LoginLink></span>
              </div> */}
            </div>
    );
}