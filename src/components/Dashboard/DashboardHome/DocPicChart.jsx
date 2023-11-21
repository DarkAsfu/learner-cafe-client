import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import useLabReport from '../../../hooks/useLabReport';
import usePresentation from '../../../hooks/usePresentation';
import useSlide from '../../../hooks/useSlide';
import useCategory from '../../../hooks/useCategory';
import useLecture from '../../../hooks/useLecture';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FFBB28'];

const CustomPieChart = ({ data }) => {
  return (
    <PieChart width={300} height={300} className='mt-10'>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="30%"
        outerRadius={60}
        fill="#8884d8"
        labelLine={true}
        label={(entry) => entry.name}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip contentStyle={{ transform: 'scaleX(-1)' }} /> {/* Add contentStyle for tooltip flip */}
    </PieChart>
  );
};

const DocPicChart = () => {
  const data01 = [
    { name: 'Lecture', value: useLecture()[0].length },
    { name: 'Suggestion', value: useCategory('suggestion')[0].length },
    { name: 'Slide', value: useSlide()[0].length },
    { name: 'Lab Report', value: useLabReport()[0].length },
    { name: 'Presentation', value: usePresentation()[0].length },
  ];

  return (
    <div className="">
      <ResponsiveContainer className="flex justify-center" width="100%" height={300}>
        <CustomPieChart data={data01} />
      </ResponsiveContainer>
    </div>
  );
};

export default DocPicChart;
