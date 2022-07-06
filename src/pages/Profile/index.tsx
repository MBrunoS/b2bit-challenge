import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import jwt_decode, { JwtPayload } from "jwt-decode";
import Avatar from "../../components/Avatar";
import { Card } from "../../components/Card";
import { FormControl } from "../../components/LoginForm/styles";
import { useAuthContext } from "../../context/AuthContext";
import { Container } from "./styles";
import TopBar from "../../components/TopBar";

type APiProfile = {
  avatar: {
    image_high_url: string;
    image_medium_url: string;
    image_low_url: string;
  };
  name: string;
  last_name: string;
  email: string;
};

type ApiError = { detail: string };

export const Profile: React.FC = () => {
  const { token, tokenRefresh, revokeToken } = useAuthContext();
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (token === null) {
      toast.error("Your session expired. Please, login again.");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    const decoded = jwt_decode<JwtPayload>(tokenRefresh as string);
    const expirationDate = Number(decoded.exp) * 1000;

    if (expirationDate < Date.now()) {
      revokeToken();
    }

    const fetchProfile = async () => {
      try {
        axios
          .get("https://frontendproject.b2bit.company/account/profile/", {
            headers: {
              Authorization: `Bearer ${token as string}`,
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            const { avatar, name, last_name, email }: APiProfile = res.data;
            setImage(avatar.image_medium_url);
            setName(`${name} ${last_name}`);
            setEmail(email);
          });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const msg = (error as AxiosError).response?.data as ApiError;
          toast.error(msg.detail);
        }
      }
    };

    fetchProfile();
  }, []);

  const handleClick = () => {
    revokeToken();
    navigate("/");
  };

  return (
    <>
      <TopBar handleClick={handleClick} />

      <Card>
        <Container>
          <Avatar image={image} name={name} />

          <FormControl>
            <label htmlFor="name">
              Your <strong>Name</strong>
            </label>
            <input type="text" name="name" id="name" value={name} readOnly />
          </FormControl>

          <FormControl>
            <label htmlFor="email">
              Your <strong>E-mail</strong>
            </label>
            <input type="text" name="email" id="email" value={email} readOnly />
          </FormControl>
        </Container>
      </Card>
    </>
  );
};
