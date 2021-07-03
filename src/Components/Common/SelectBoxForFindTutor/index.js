import React from "react";
import "./SelectBoxForFindTutor.scss";
import { ReactSVG } from "react-svg";
import arrow from "../../../Assets/Common/arrow-right.png";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default class SelectBoxForFindTutor extends React.Component {
  state = {
    showMenu: false,
    selectedText: "",
  };

  componentDidMount() {
    this.setState({
      selectedText: this.props.selectedText || "",
    });
  }

  componentDidUpdate(prevProps, prevStste, selectedText) {
    if (prevProps.selectedText !== this.props.selectedText) {
      this.setState({
        selectedText: this.props.selectedText || "",
      });
    }
  }

  showMenu = (event, flag) => {
    event.stopPropagation();
    this.setState({
      showMenu: flag,
    });
  };

  selectItem = (item) => {
    if(item == null){
      var item ="";
    }
    // console.log("selectItem: ", item)
    // this.setState({
    //   selectedText: this.props.no_value ? "" : item.name,
    //   showMenu: false,
    // });

    this.props.onChange(item);
  };

  changeText = (e) => {
    this.setState({
      selectedText: e.currentTarget.value,
    });
  };

  render() {
    const { className, icon, placeholder, options, show_arrow, value } = this.props;
    const { showMenu, selectedText } = this.state;
    
    const filteredOptions = options && options.length ? 
    options.filter(item =>
        item.name.toLowerCase().includes(selectedText.toLowerCase())
      ) : []

    return (
      <div className="selectbox-find-tutor-component">
        <div className={`selectbox-find-tutor-container ${className || ""}`}>
          <Autocomplete
            id="combo-box-demo"
            options={filteredOptions}
            // defaultValue={{ name: value}}
            getOptionLabel={(option) => option.name}
            style={{ width: '100%' }}            
            onChange = {(event, value)=> this.selectItem(value)}            
            renderInput={(params) => <TextField {...params} onChange={e => placeholder === 'City'? this.props.changeTxt(e.target.value) : console.log('text;',e.target.value)} label={placeholder} variant="outlined" />}
          />
        </div>
      </div>
    );
  }
}
