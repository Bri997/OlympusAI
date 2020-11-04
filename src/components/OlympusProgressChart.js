import React from 'react'
import { Text, View, Dimensions, StyleSheet } from 'react-native'
import { LineChart } from 'react-native-chart-kit';
import { RFValue } from "react-native-responsive-fontsize";
import CommonStyle from '../styles/CommonStyle';

export default class OlympusProgressChart extends React.Component
{
    state = {
        currentIndex: -1
    }

    constructor (props) {
        super(props)
    }


    render() {
        return (
            <View style={[CommonStyle.fullsize, {paddingVertical: 10, paddingHorizontal: 0}]}>
                <LineChart
                    data={{
                        datasets: [
                        {
                            data: this.props.data.map((item) => item.weight)
                        }
                    ]
                    }}
                    width={this.props.width ? this.props.width - 20 : Dimensions.get("window").width - 20}
                    height={this.props.height - 25 - 4}
                    withShadow={false}
                    withInnerLines={false}
                    withOuterLines={false}
                    withVerticalLabels={false}
                    withHorizontalLabels={false}
                    onDataPointClick={(data) => {
                        this.setState({currentIndex: data.index});
                        this.props.onPressDot(data.index);}}
                    getDotProps={(dataPoint, index) => {return index == this.state.currentIndex ? {r: "4", strokeWidth: "3", stroke: "#555555"} : {r: "4", strokeWidth: "3", stroke: "#ffffff"};}}
                    renderDotContent={({x, y, index}) => 
                        <View key={index}>
                            <Text key={index} style={[CommonStyle.textBold_Normal, {position: 'absolute', top: index > 0 && this.props.data[index].weight > this.props.data[index - 1].weight ? y - 25 : y + 5, left: x - 20,}]}>{this.props.data[index].date1}</Text>
                            {index == 0 && <Text style={[CommonStyle.textLarge_Bold, {position: 'absolute', top: 10, left: 20}]}>{this.state.currentIndex != -1 && this.props.data[this.state.currentIndex].weight + ' Lbs'}</Text>}
                        </View>
                    }
                    chartConfig={{
                        color: () => `rgb(186, 253, 79)`,
                        propsForDots: {
                            r: "4",
                            strokeWidth: "3",
                            stroke: "#ffffff"
                        }
                    }}
                    bezier
                    style={{
                        borderRadius: 25
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

})