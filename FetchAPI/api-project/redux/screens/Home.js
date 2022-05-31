import React,{Component} from 'react';

import{FlatList,
    StyleSheet,
    View,
    Text 
} from 'react-native';
import  {connect,useDispatch,useSelector} from 'react-redux';   
import { bindActionCreators } from 'redux'; 
import { fetchExchangesAction } from '../services/fetchData';

export class Home extends Component{
    constructor(props){
        super(props);
    }
    async componentDidMount() {
      const { dispatch } = this.props
      this.props.dataSource();
      }
  
    render(){
        return(
            <View style="styles.container">
               <Text>borsa</Text>
                <FlatList
          data={ this.props.exchanges}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View>
            <Text >{item}</Text>
           
          </View>
          }
          keyExtractor={item => item._id}
        />

           </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
});
const mapDispatchToProps = dispatch => bindActionCreators({
    dataSource: fetchExchangesAction,
  }, dispatch)  

function mapStateToProps(state)
{
    
    return {
      exchanges : state.exchanges
     
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);






