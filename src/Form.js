import React from 'react';
import './Form.css';

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
        <label>
          Muški:
          <input className="Form-input" name="male" type="text" spellCheck="false" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Ženska:
          <input className="Form-input" name="female" type="text" spellCheck="false" value={this.state.female} onChange={this.handleChange} />
        </label>
        <label>
          Kadi?
          <input className="Form-input" name="where" type="text" spellCheck="false" value={this.state.where} onChange={this.handleChange} />
        </label>
        <label>
          Ča delaju?
          <input className="Form-input" name="doingWhat" type="text" spellCheck="false" value={this.state.doingWhat} onChange={this.handleChange} />
        </label>
        <label>
          Ki je doša?
          <input className="Form-input" name="thirdPerson" type="text" spellCheck="false" value={this.state.thirdPerson} onChange={this.handleChange} />
        </label>
        <label>
          Ča je reka?
          <input className="Form-input" name="statement" type="text" spellCheck="false" value={this.state.statement} onChange={this.handleChange} />
        </label>
        <input className="Form-button" type="submit" value="Unesi" />
      </form>
    );
  }
}

export default Form;