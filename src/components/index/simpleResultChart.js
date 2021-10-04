const SimpleResultChart = (props) => {
  return (
    <div class="simpleResultChart">
      <table>
        <tbody>
        {props.recordList.map((row) => {
        return (
          <tr>
            <td> {row.name.length > 11 ?row.name.substr(0, 10):row.name}</td>
            <td> <a>Speed</a> {row.speed} </td>
            <td> <a>Accuracy</a> {row.accuracy}</td>
          </tr>
        );
      })}    
        </tbody>
      </table>
    </div>
  );
};

export default SimpleResultChart;
