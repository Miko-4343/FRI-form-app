import FormField from "../components/formField";
import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import { ValidatedataFull } from "../functions/functions";

describe("FormField", () => {
  it("should render label and input", () => {
    render(
      <FormField
        label="Ime"
        inputType="text"
        placeholder="Vnesite ime"
        register={() => ({}) as any}
        errors={{}}
        requireP={true}
        validation={{}}
      />,
    );
    expect(screen.getByText("Ime")).toBeDefined();
    expect(screen.getByPlaceholderText("Vnesite ime")).toBeDefined();
  });
});

import { Validatedata } from "../functions/functions";

describe("Validatedata", () => {
  it("should return true for valid data", () => {
    const validData = {
      Ime: "Miha",
      Priimek: "Kos",
      Ulica: "Grobelno 67",
      "Poštna številka": 3231,
      Pošta: "Grobelno",
      Država: "Slovenia",
      "Davčna številka": 12345678,
      "Rojstni dan": new Date("2005-01-22"),
      "E-pošta": "mk62735@student.uni-lj.si",
    };
    expect(Validatedata(validData)).toBe(true);
  });

  it("should return false for invalid data", () => {
    const invalidData = {
      Ime: "Mha",
      Priimek: "Ks",
      Ulica: "Grobelno 67",
      "Poštna številka": 3231,
      Pošta: "Grobelno",
      Država: "Slovenia",
      "Davčna številka": 12345678,
      "Rojstni dan": new Date("2005-01-22"),
      "E-pošta": "mk62735@student.uni-lj.si",
    };
    expect(Validatedata(invalidData)).toBe(false);
  });
  it("should return name too short for invalid data", () => {
    const invalidData = {
      Ime: "Ma",
      Priimek: "Kos",
      Ulica: "Grobelno 67",
      "Poštna številka": 3231,
      Pošta: "Grobelno",
      Država: "Slovenia",
      "Davčna številka": 12345678,
      "Rojstni dan": new Date("2005-01-22"),
      "E-pošta": "mk62735@student.uni-lj.si",
    };
    expect(ValidatedataFull(invalidData).error.issues[0].message).toBe(
      "Too small: expected string to have >=3 characters",
    );
  });

  it("should return surname too short for invalid data", () => {
    const invalidData = {
      Ime: "Miha",
      Priimek: "Ks",
      Ulica: "Grobelno 67",
      "Poštna številka": 3231,
      Pošta: "Grobelno",
      Država: "Slovenia",
      "Davčna številka": 12345678,
      "Rojstni dan": new Date("2005-01-22"),
      "E-pošta": "mk62735@student.uni-lj.si",
    };
    expect(ValidatedataFull(invalidData).error.issues[0].message).toBe(
      "Too small: expected string to have >=3 characters",
    );
  });

  it("should return post number should be exactly 4 numbers long", () => {
    const invalidData = {
      Ime: "Miha",
      Priimek: "K0s",
      Ulica: "Grobelno 67",
      "Poštna številka": 321,
      Pošta: "Grobelno",
      Država: "Slovenia",
      "Davčna številka": 12345678,
      "Rojstni dan": new Date("2005-01-22"),
      "E-pošta": "mk62735@student.uni-lj.si",
    };
    expect(ValidatedataFull(invalidData).error.issues[0].message).toBe(
      "Too small: expected number to be >=1000",
    );
  });

  it("should return post number should be exactly 4 numbers long", () => {
    const invalidData = {
      Ime: "Miha",
      Priimek: "K0s",
      Ulica: "Grobelno 67",
      "Poštna številka": 32167,
      Pošta: "Grobelno",
      Država: "Slovenia",
      "Davčna številka": 12345678,
      "Rojstni dan": new Date("2005-01-22"),
      "E-pošta": "mk62735@student.uni-lj.si",
    };
    expect(ValidatedataFull(invalidData).error.issues[0].message).toBe(
      "Too big: expected number to be <=9999",
    );
  });
  it("should return tax number should be exactly 4 numbers long", () => {
    const invalidData = {
      Ime: "Miha",
      Priimek: "K0s",
      Ulica: "Grobelno 67",
      "Poštna številka": 3231,
      Pošta: "Grobelno",
      Država: "Slovenia",
      "Davčna številka": 1234567,
      "Rojstni dan": new Date("2005-01-22"),
      "E-pošta": "mk62735@student.uni-lj.si",
    };
    expect(ValidatedataFull(invalidData).error.issues[0].message).toBe(
      "Too small: expected number to be >=10000000",
    );
  });
  it("should return email is not in correct format ", () => {
    const invalidData = {
      Ime: "Miha",
      Priimek: "K0s",
      Ulica: "Grobelno 67",
      "Poštna številka": 3231,
      Pošta: "Grobelno",
      Država: "Slovenia",
      "Davčna številka": 12345678,
      "Rojstni dan": new Date("2005-01-22"),
      "E-pošta": "mk62735.student.uni-lj.si",
    };
    expect(ValidatedataFull(invalidData).error.issues[0].message).toBe(
      "Invalid email address",
    );
  });
});
