import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ResultChart = (props) => {
    return (
        <div class="result__chart">
            <LineChart style={{
                margin: "30px auto"
            }} width={400} height={300} data={props.speedData}>
                <YAxis/>
                <Tooltip
                    itemStyle={{ background: "#374042" }}
                    labelStyle={{ display: "none" }}
                    contentStyle={{
                        background: "#374042",
                        opacity: "90%",
                        border: "1px solid #374042",
                        borderRadius: "10px"
                    }} />
                <CartesianGrid 
                    strokeDasharray="3 4" />
                <Line type="monotone" dataKey="speed" stroke="#dfe6e9" strokeWidth={2} />
            </LineChart>
        </div>
    )
}

export default ResultChart;