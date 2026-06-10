export const polja = [
  {
    label: "Ime",
    inputType: "text",
    placeholder: "Vnesite ime",
    validation: {
      pattern: {
        value: /^\D*$/,
        message: "Ime ne sme vsebovati številk",
      },
    },
  },
  {
    label: "Priimek",
    inputType: "text",
    placeholder: "Vnesite priimek",
    validation: {
      pattern: {
        value: /^\D*$/,
        message: "Priimek ne sme vsebovati številk",
      },
    },
  },
  {
    label: "Ulica",
    inputType: "text",
    placeholder: "Vnesite ulico",
    validation: {},
  },
  {
    label: "Poštna številka",
    inputType: "text",
    placeholder: "Vnesite poštno številko",
    validation: {
      pattern: {
        value: /^\d*$/,
        message: "Poštna številka ne sme vsebovati črk",
      },
      minLength: {
        value: 4,
        message: "Poštna številka mora imeti vsaj 4 številke",
      },
      maxLength: {
        value: 4,
        message: "Poštna številka ne sme imeti več kot 4 številke",
      },
    },
  },
  {
    label: "Pošta",
    inputType: "text",
    placeholder: "Vnesite pošto",
    validation: {
      pattern: {
        value: /^\D*$/,
        message: "Pošta ne sme vsebovati številk",
      },
    },
  },
  {
    label: "Država",
    inputType: "text",
    placeholder: "Vnesite državo",
    validation: {
      pattern: {
        value: /^\D*$/,
        message: "Država ne sme vsebovati številk",
      },
    },
  },
  {
    label: "Davčna številka",
    inputType: "text",
    placeholder: "Vnesite davčno številko",
    validation: {
      pattern: {
        value: /^\d{8}$/,
        message: "Davčna številka mora vsebovati točno 8 številk",
      },
    },
  },
  {
    label: "E-pošta",
    inputType: "text",
    placeholder: "Vnesite e-poštni naslov",
    validation: {
      pattern: {
        value:
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Neveljaven email naslov",
      },
    },
  },
  {
    label: "Dummy text",
    inputType: "text",
    placeholder: "remove this",
    validation: {},
  },
  {
    label: "Dummy text",
    inputType: "text",
    placeholder: "remove this",
    validation: {},
  },
  {
    label: "Rojstni dan",
    inputType: "date",
    placeholder: "(dd.mm.yyyy)",
    validation: {},
    isDatePicker: true,
  },
];
