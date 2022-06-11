import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ResultChart = (props) => {
    return (
        <div class="result__chart">
                <LineChart style={{margin: "80px 30px 0 70px"}} width={650} height={500} data={props.data}>
                    <CartesianGrid strokeDasharray="3 4" />
                    <YAxis yAxisId="left"/>
                    <YAxis yAxisId="right" orientation="right"/>

                    <Line dot={{ strokeWidth: 6 }} strokeWidth={3} yAxisId="left"  type="monotone" dataKey="speed" stroke="#d32f2f" />
                    <Line dot={{ strokeWidth: 6 }} strokeWidth={3} yAxisId="right" type="monotone" dataKey="accuracy" stroke="#1B6B9E" />
                    <Legend margin={{ top: 30, left: 0, right: 0, bottom: 0 }} />
                    <Tooltip
                    itemStyle={{ background: "#242424", color: "#ffffff" }}
                    labelStyle={{ display: "none" }}
                    contentStyle={{
                        background: "#242424",
                        opacity: "90%",
                        border: "1px solid #242424",
                        borderRadius: "10px"
                    }} />
                
            </LineChart>            
        </div>
    )
}

export default ResultChart;