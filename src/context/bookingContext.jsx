import { createContext, useContext, useState } from "react";

const CurrentBookingContext = createContext(undefined);

// eslint-disable-next-line react/prop-types
export const CurrentBookingProvider = ({ children }) => {
    const [booking, setBooking] = useState(null);

    return (
        <CurrentBookingContext.Provider
            value={{
                booking,
                setBooking
            }}
        >
            {children}
        </CurrentBookingContext.Provider>
    )
}

export const useBookingContext = () => useContext(CurrentBookingContext);