"use client";
import { useSiteCopy } from "@/lib/jktl/site-copy";
import { Card, CardContent } from "@/components/ui/card";

const Solution = () => {
  const t = useSiteCopy();

  const solutions = [
    t("components.Solution.field1"),
    t("components.Solution.field2"),
    t("components.Solution.field3"),
    t("components.Solution.field4"),
    t("components.Solution.field5"),
  ];

  return (
    <div className="container mx-auto py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">
        {t("components.Solution.field6")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {solutions.map((solution, index) => (
          <Card key={index} className="p-6">
            <CardContent className="text-lg font-semibold">
              {solution}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Solution;
