import * as Yup from 'yup';

const errors = {
    email: {
        required:  'لطفا آدرس ایمیل خود را وارد کنید',
        email: 'آدرس ایمیل نامعتبر است',
    },
    password: {
        required: 'لطفا رمز عبور خود را وارد کنید',
        min: 'تعداد کارکتر ها باید کمتر از هشت میباشد',
        matches: 'کارکترها باید شامل حروف و عدد باشند'
    }
}

let loginSchema = Yup.object({
    email: Yup.string().email(errors.email.email).required(errors.email.required),
    password: Yup.string().required(errors.password.required).min(8 , errors.password.min).matches(/^([a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\u06F0-\u06F9 _.-]+)$/ , errors.password.matches),
})

export default loginSchema;