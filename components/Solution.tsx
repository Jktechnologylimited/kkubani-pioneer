import { Card, CardContent } from "@/components/ui/card";

const solutions = [
  "Intellectual Creativity",
  "Case Management Acceleration",
  "Empathy & Focus",
  "Innovative Expertise",
  "Revolutionary Simplicity",
];

const Solution = () => {
  return (
    <div className="container mx-auto py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {solutions.map((solution, index) => (
          <Card key={index} className="p-6">
            <CardContent className="text-lg font-semibold">{solution}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Solution;
