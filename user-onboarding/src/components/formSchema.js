import * as yup from 'yup'


 const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters'),
    email: yup
        .string()
        .email('Valid email required')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required'),
    checkbox: yup
        .boolean()
        .oneOf([false], 'You must sign your life away')
        
        
        
        
})


export default formSchema