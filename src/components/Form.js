import React from 'react';
import './Form.css';

function InputLabel(props) {
  return (
    <label>
      {props.label}
      <input
        className="Form-input"
        name={props.name}
        type="text"
        spellCheck="false"
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  );
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      male: '',
      female: '',
      where: '',
      doingWhat: '',
      thirdPerson: '',
      statement: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearState() {
    this.setState({
      male: '',
      female: '',
      where: '',
      doingWhat: '',
      thirdPerson: '',
      statement: '',
    });
  }

  handleChange(event) {
    switch(event.target.name) {
      case 'male':
        this.setState({male: event.target.value});
        break;
      case 'female':
        this.setState({female: event.target.value});
        break;
      case 'where':
        this.setState({where: event.target.value});
        break;
      case 'doingWhat':
        this.setState({doingWhat: event.target.value});
        break;
      case 'thirdPerson':
        this.setState({thirdPerson: event.target.value});
        break;
      case 'statement':
        this.setState({statement: event.target.value});
        break;
      default:
        console.log('dev error');
    }
  }

  isValid(value) {
    return value.male && value.female && value.where && value.doingWhat && value.thirdPerson && value.statement;
  }

  handleSubmit(event) {
    event.preventDefault();
    const currentState = this.state;
    if (!this.isValid(currentState)) {
      alert('popuni sva polja');
    } else {
      event.target.reset();
      this.clearState();
      this.props.onClick(currentState);
    }
  }

  render() {
    return (
      <form className="Form-input" onSubmit={this.handleSubmit}>
        <InputLabel label="Muški:" name="male" value={this.state.male} onChange={this.handleChange} />
        <InputLabel label="Ženska:" name="female" value={this.state.female} onChange={this.handleChange} />
        <InputLabel label="Kadi?" name="where" value={this.state.where} onChange={this.handleChange} />
        <InputLabel label="Ča delaju?" name="doingWhat" value={this.state.doingWhat} onChange={this.handleChange} />
        <InputLabel label="Ki je doša?" name="thirdPerson" value={this.state.thirdPerson} onChange={this.handleChange} />
        <InputLabel label="Ča je reka?" name="statement" value={this.state.statement} onChange={this.handleChange} />
        <input className="Form-button" type="submit" value="Unesi" />
      </form>
    );
  }
}

export default Form;