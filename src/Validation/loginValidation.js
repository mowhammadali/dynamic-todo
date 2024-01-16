import * as Yup from 'yup';

const errors = {
    email: {
        required:  'لطفا آدرس ایمیل خود را وارد کنید',
        email: 'آدرس ایمیل نامعتبر است',
    },
    password: {
        required: 'لطفا رمز عبور خود را وارد کنید',
        min: 'رمز عبور باید حداقل هشت کارکتر باشد',
        matches: 'کارکترها باید شامل حروف و عدد باشند'
    }
}

let loginSchema = Yup.object({
    email: Yup.string().email(errors.email.email).required(errors.email.required),
    password: Yup.string().min(8 , errors.password.min).required(errors.password.required),
})

export default loginSchema;