import React, { Props } from "react";
import Router from 'next/router'
import { useForm, Controller, useController } from "react-hook-form";
import PostAddIcon from '@material-ui/icons/PostAdd';
import { TextField, Button } from "@material-ui/core";

interface IFormInputs {
  typo: string;
  correct: string;
}

type Input = {
  name: string;
  label: string;
  control: any;
};

export default function TypoForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>();

  function Input({ control, name, label }: Input) {
    const {
      field: { ref, ...inputProps },
    } = useController({
      name,
      control,
      rules: { required: '入力してください！' },
    });

    return (
      <TextField
        {...inputProps}
        label={label}
        error={Boolean(errors[name])}
        helperText={errors[name] && errors[name].message}
        inputRef={ref}
      />
    );
  }

  const onSubmit = async (data: IFormInputs) => {
    console.log(data);
    try {
      await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="textBox">
        <Input name="typo" label="誤字を入力" control={control} />
      </div>
      <div className="textBox">
        <Input name="correct" label="訂正文を入力" control={control} />
      </div>

      <Button
        variant="contained"
        color="primary"
        type="submit"
        startIcon={<PostAddIcon />}
      >
        投稿
      </Button>

      <style jsx>{`
        .textBox {
          margin: 10px;
        }
      `}</style>
    </form>
  );
}
