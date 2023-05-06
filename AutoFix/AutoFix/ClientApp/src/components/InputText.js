import React from "react";
import { asField } from "informed";
import classnames from "classnames";

export default asField(
  ({
    fieldState,
    fieldApi,
    onChange,
    field,
    label,
    helpBlock,
    numbers,
    col,
    forwardedRef,
    required,
    type,
    noLabel,
    ...props
  }) => (
    <div
      className={classnames("text-input-form-state form-group", col, {
        required,
        "has-error": fieldState.error,
      })}
    >
      {!noLabel && (
        <label style={{ marginTop: "0.8rem" }} htmlFor={field}>
          {label}
        </label>
      )}
      <input
        className={classnames("form-control", {
          "has-error": fieldState.error,
        })}
        value={fieldState.value || ""}
        style={{ marginTop: "0.3rem" }}
        onChange={(e) => {
          fieldApi.setValue(e.target.value);
          fieldApi.setError(null);
          if (onChange) {
            onChange(e.target.value);
          }
        }}
        type={type ? "password" : "text"}
        {...props}
      />
      {helpBlock && <small className="form-text text-muted">{helpBlock}</small>}
      {fieldState.error && (
        <small className={fieldState.error ? "text-danger" : null}>
          {fieldState.error}
        </small>
      )}
    </div>
  )
);
