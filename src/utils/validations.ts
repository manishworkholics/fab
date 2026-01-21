import * as yup from "yup";

export const validationSchema = {
  register: yup.object().shape({
    email: yup.string().email().required().label("Email"),
    firstName: yup.string().required().label("First Name"),
    lastName: yup.string().required().label("Last Name"),
    username: yup.string().required().label("Username"),
    password: yup.string().required().label("Password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required()
      .label("Confirm Password"),
  }),
  login: yup.object().shape({
    email: yup.string().email().required().label("Email"),
    password: yup.string().required().label("Password"),
  }),
  phone: yup.object().shape({
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(
        /^\+?[1-9]\d{1,14}$/,
        "Enter a valid phone number with country code"
      )
      .label("Phone Number"),
  }),
  upload: yup.object().shape({
    message: yup.string().required().label("Last Name"),

  }),
  quote: yup.object().shape({
    title: yup
      .string()
      .required('Title is required')
      .min(3, 'Title must be at least 3 characters')
      .max(100, 'Title cannot exceed 100 characters')
      .trim(),

    description: yup
      .string()
      .required('Quote description is required')
      .min(10, 'Description must be at least 10 characters')
      .max(500, 'Description cannot exceed 500 characters')
      .trim(),

    quoteMaterials: yup
      .array()
      .of(yup.string().trim())
      .min(1, 'At least one material is required')
      .required('Quote materials are required'),

    turnTime: yup
      .string()
      .required('Turn time is required')
      .min(1, 'Turn time must be at least 1 character')
      .max(365, 'Turn time cannot exceed 365 characters')
      .trim(),

    quoteFiles: yup
      .array()
      .of(yup.string().trim())
      .min(1, 'At least one quote file is required')
      .required('Quote quote file are required'),

    quoteType: yup
      .array()
      .of(yup.string().trim())
      .min(1, 'At least one quote type is required')
      .required('Quote quote type are required'),

    budget: yup
      .number()
      .integer('Budget must be a whole number')
      .min(0, 'Budget cannot be negative')
      .required('Number of boards is required'),

    hasNDA: yup
      .boolean()
      .required('NDA status is required'),

    quoteName: yup
      .string()
      .required('Quote name is required')
      .min(2, 'Quote name must be at least 2 characters')
      .max(50, 'Quote name cannot exceed 50 characters')
      .trim(),

    assignedEMSId: yup
      .number()
      .integer('assignedEMSId must be a whole number')
      .min(0, 'assignedEMSId cannot be negative')
      .required('Assigned EMS id is required'),

  })
};

export const RegistrationSchema = yup.object().shape({
  email: yup.string().email().required().label("Email"),
  firstName: yup.string().required().label("First Name"),
  lastName: yup.string().required().label("Last Name"),
  username: yup.string().required().label("Username"),
  password: yup.string().required().label("Password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required()
    .label("Confirm Password"),

  acceptTerms: yup.boolean()
    .oneOf([true], "You must accept terms")
    .required(),

  phone: yup.string().required("Phone is required"),

  role: yup.string().required(),



});
