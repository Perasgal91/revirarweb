import { useState, useEffect } from "react";
import { notification } from "antd";
import {send} from 'emailjs-com';

export const useForm = (validate: any) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Éxito",
      description: "Su mensaje ha sido enviado!",
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));
    
    if (Object.keys(values).length === 4) {

      const data = {
        name: Object.values(values)[0],
        phone: Object.values(values)[1],
        email: Object.values(values)[2],
        address: Object.values(values)[3]
    }
    send('service_eboaerg', 'template_ttlyef4', data, 'user_CFcGpnhJSDxRrmxNHmhVN')
        .then(() => {
          setShouldSubmit(true);
        }, (error) => {
            alert("Inténtelo de nuevo, ha habido un error");
        });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues("");
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};
