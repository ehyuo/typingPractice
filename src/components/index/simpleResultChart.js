const SimpleResultChart = (props) => {
  return (
    <div class="index__panel index__panel--scores">
        {props.recordList.map((row) => {
        return (
          <div class="index__item">
            <div class="index__subitem index__subitem--name">
              <div class="index__text--value index__text--name">
               {row.name.length > 11 ?row.name.substr(0, 10):row.name}
               <div class="index__text index__text--mode">{row.mode}</div>
              </div>
              {row.mode == "longText"? <div class="index__text index__text--title">{row.title}</div>:""}
              
              
              
        
            </div>

            

            <div class="index__subitem index__subitem--speed">
              <div class="index__text index__text--value">{row.speed}</div>
              <div class="index__text index__text--unit">CPM</div>
            </div>
            <div class="index__subitem index__subitem--accuray">
              <div class="index__text index__text--value">{row.accuracy}</div>
              <div class="index__text index__text--unit">%</div>
            </div>
          </div>
        );
      })}    
       
    </div>
  );
};

export default SimpleResultChart;
