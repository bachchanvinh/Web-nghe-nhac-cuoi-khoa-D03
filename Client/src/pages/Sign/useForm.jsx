import { useState, useEffect } from "react";

const useForm = (callback, validate, signcallback, fileimg) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    status: '',
    src_img: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(values)
    setValues({
      ...values,
      ['status']: ""
    })
    // console.log(values.count, errors)
    setErrors(validate(values));
    setIsSubmitting(true);
  };
  useEffect(() => {
    setErrors(validate(values));
  }, [values.status])
  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        // console.log(values)
        if (values.password2 === "") {
          signcallback(values.email, values.password).then((res) => {
            if (typeof res === "string") {
              // console.log(res, 123)
              setValues({
                ...values, ['status']: "unvaild1123"
              })
              setErrors(validate(values))
            }
            else {
              // console.log("else")
              callback()
            };
          })
        }
        else {
          console.log(values)
          signcallback(values.email, values.password, values.username, fileimg)
          callback()
        }
      }
    },
    [errors, values.status]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
