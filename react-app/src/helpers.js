import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const storeUser = (data) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      username: data.user.username,
      email: data.user.email,
      address: data.user.address,
      jwt: data.jwt,
    })
  );
};

export const userData = () => {
  const stringifiedUser = localStorage.getItem("user") || '""';
  return JSON.parse(stringifiedUser || {});
};

export const Protector = ({ Component }) => {
  const navigate = useNavigate();

  const { jwt } = userData();

  useEffect(() => {
    if (!jwt) {
      navigate("/login");
    }
  }, [navigate, jwt]);

  return <Component />;
};


export const SendtoProfile = ({ Component }) => {
    const navigate = useNavigate();
  
    const { jwt } = userData();
  
    useEffect(() => {
      if (jwt) {
        navigate("/profile");
      }
    }, [navigate, jwt]);
  
    return <Component />;
  };

  