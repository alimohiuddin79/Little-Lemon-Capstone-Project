import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Heading,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useBookingContext } from "../../context/bookingContext";

const OrderOnline = () => {

  const {booking, setBooking} = useBookingContext();

  var today = new Date();
  const minDate = today.toISOString().split("T")[0];

  var maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 7);

  const formattedMaxDate = maxDate.toISOString().split("T")[0];

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      seats: 2,
      date: "",
      time: "",
      creditCardNumber: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "must be at least 2 character long")
        .max(12, "Too long")
        .required("Please enter your name"),
      lastName: Yup.string()
        .min(2, "must be at least 2 character long")
        .max(12, "Too long")
        .notRequired("Optional"),
      email: Yup.string()
        .email()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
        .required("Please enter your email"),
      seats: Yup.number()
        .min(2)
        .max(8)
        .required("Please select number of seats"),
      date: Yup.date().min(minDate).max(formattedMaxDate),
      time: Yup.string()
        .required("Time is required")
        .matches(
          /^(0[0-9]|1[0-9]|2[0-2]):[0-5][0-9]$/,
          "Invalid time format (HH:mm)/(AM:PM)"
        ),
      creditCardNumber: Yup.string()
        .min(16, "Please enter full credit card number")
        .max(16, "Invalid credit number")
        .matches(/^\d{16}$/, "Invalid credit card number")
        .required("Please provide your credit card number"),
    }),
    onSubmit: (values) => {
      setBooking(values);
    },
  });

  console.log(minDate);
  console.log(formattedMaxDate);
  console.log(formik.errors.time);

  return (
    <Box
      width={"100%"}
      minHeight={"28em"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      paddingY={"3em"}
    >
      {booking === null ? (
        <form onSubmit={formik.handleSubmit} className="max-w-md w-full">
        <Box maxWidth={"448px"} width={"100%"} height={"100%"}>
          <Box width={"100%"} paddingX={"1.4em"} paddingY={"1em"}>
            <VStack spacing={4} paddingBottom={"1.4em"}>
              <FormControl
                isInvalid={formik.touched.date && formik.errors.date}
                isRequired
              >
                <FormLabel htmlFor="date">Date</FormLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  min={minDate}
                  max={formattedMaxDate}
                  onChange={formik.handleChange}
                  value={formik.values.date}
                  {...formik.getFieldProps("date")}
                />
                <FormErrorMessage>
                  {formik.touched.date && formik.errors.date ? (
                    <div>{formik.errors.date}</div>
                  ) : null}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.touched.time && formik.errors.time}
                isRequired
              >
                <FormLabel htmlFor="time">Time</FormLabel>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  min="12:00:00"
                  max="22:00:00"
                  onChange={formik.handleChange}
                  value={formik.values.time}
                  {...formik.getFieldProps("time")}
                />
                <FormErrorMessage>
                  {formik.touched.time && formik.errors.time ? (
                    <div>{formik.errors.time}</div>
                  ) : null}
                </FormErrorMessage>
              </FormControl>
            </VStack>

            <VStack spacing={4} paddingBottom={"1.4em"}>
              <FormControl
                isInvalid={formik.touched.seats && formik.errors.seats}
                isRequired
              >
                <FormLabel htmlFor="seats">Number of seats</FormLabel>
                <NumberInput defaultValue={2} min={2} max={8}>
                  <NumberInputField
                    id="seats"
                    name="seats"
                    type="number"
                    placeholder="Number of diners"
                    onChange={formik.handleChange}
                    value={formik.values.seats}
                    {...formik.getFieldProps("seats")}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormErrorMessage>
                  {formik.touched.seats && formik.errors.seats ? (
                    <div>{formik.errors.seats}</div>
                  ) : null}
                </FormErrorMessage>
              </FormControl>
            </VStack>

            <VStack spacing={4} paddingBottom={"1.4em"}>
              <FormControl
                isInvalid={formik.touched.firstName && formik.errors.firstName}
                isRequired
              >
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Input
                  variant={"flushed"}
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                  ) : null}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.touched.lastName && formik.errors.lastName}
              >
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <Input
                  variant={"flushed"}
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  {...formik.getFieldProps("lastName")}
                />
                <FormErrorMessage>
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>
                  ) : null}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
                isRequired
              >
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  variant={"flushed"}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={
                  formik.touched.creditCardNumber &&
                  formik.errors.creditCardNumber
                }
                isRequired
              >
                <FormLabel htmlFor="creditCardNumber">
                  Credit Card Number
                </FormLabel>
                <Input
                  variant={"flushed"}
                  id="creditCardNumber"
                  name="creditCardNumber"
                  type="text"
                  placeholder="xxxxxxxxxxxxxxxx"
                  onChange={formik.handleChange}
                  value={formik.values.creditCardNumber}
                  {...formik.getFieldProps("creditCardNumber")}
                />
                <FormErrorMessage>
                  {formik.touched.creditCardNumber &&
                  formik.errors.creditCardNumber ? (
                    <div>{formik.errors.creditCardNumber}</div>
                  ) : null}
                </FormErrorMessage>
              </FormControl>
            </VStack>

            <Button
              type="submit"
              bg={"primary-2"}
              color={"highlight-2"}
              fontSize={"1.2em"}
              fontWeight={"medium"}
              rounded={"16px"}
              paddingX={"2.8em"}
              paddingY={"0.8em"}
              variant={"solid"}
              _hover={{
                bg: "white",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </form>
      ) : (
        <Heading
          as={'h1'}
          size={'3xl'}
          color={'primary-2'}
          textAlign={'center'}
        >
          Congratulations! Your table has been booked on {booking.date} at {booking.time}.
        </Heading>
      )}
      
    </Box>
  );
};

export default OrderOnline;
