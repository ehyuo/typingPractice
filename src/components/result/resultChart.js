import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ResultChart = (props) => {
    return (
        <div class="result__chart">
            <LineChart style={{
                margin: "50px auto"
            }} width={500} height={400} data={props.speedData}>
                <YAxis/>
                <Tooltip
                    itemStyle={{ background: "#d32f2f", color: "#ffffff" }}
                    labelStyle={{ display: "none" }}
                    contentStyle={{
                        background: "#d32f2f",
                        opacity: "90%",
                        border: "1px solid #242424",
                        borderRadius: "10px"
                    }} />
                <CartesianGrid 
                    strokeDasharray="3 4" />
                <Line type="monotone" dataKey="speed" stroke="#ffffff" strokeWidth={2} />
            </LineChart>
        </div>
    )
}

export default ResultChart;