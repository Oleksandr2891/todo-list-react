import React from "react";
import styles from "./InputForm.module.scss";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.textInput = React.createRef();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value !== "") {
      if (typeof this.props.options !== "boolean") {
        this.props.onChange({
          value: this.state.value,
          id: this.props.options.id,
        });
      } else {
        this.props.onCreate(this.state);
      }
    } else {
      alert("Ви не змогли додати задачу, тому що поле залишилось пустим !");
      return false;
    }
    event.preventDefault();
  }

  componentDidMount() {
    if (typeof this.props.options !== "boolean")
      this.setState({ value: this.props.options.value });
  }

  componentWillUnmount() {
    if (!this.state.value.length) {
      this.setState({ value: "" });
    }
  }

  render() {
    const { value } = this.state;
    return (
      <form className={styles.form__wrapper}>
        <textarea
          className={styles.form__input}
          rows="3"
          cols="40"
          value={value}
          onChange={this.handleChange}
          placeholder="Створіть тут завдання"
          ref={this.textInput}
        ></textarea>
        <button onClick={this.handleSubmit} className={styles.form__button}>
          Submit
        </button>
      </form>
    );
  }
}

export default InputForm;
