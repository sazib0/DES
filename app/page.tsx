import { Card } from "@/components/ui/card";
import {
  Activity,
  Users,
  BarChart3,
  AlertCircle,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Activity className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">System Status</p>
              <h3 className="text-2xl font-bold">Operational</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Users className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Users</p>
              <h3 className="text-2xl font-bold">1,234</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <BarChart3 className="h-8 w-8 text-purple-500" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Modules</p>
              <h3 className="text-2xl font-bold">24</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <AlertCircle className="h-8 w-8 text-yellow-500" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Pending Tasks</p>
              <h3 className="text-2xl font-bold">12</h3>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <div>
                  <p className="text-sm font-medium">New module installed</p>
                  <p className="text-sm text-muted-foreground">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">System Health</h2>
          <div className="space-y-4">
            {[
              { name: "CPU Usage", value: "45%" },
              { name: "Memory Usage", value: "60%" },
              { name: "Storage", value: "35%" },
            ].map((metric) => (
              <div key={metric.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{metric.name}</span>
                  <span className="font-medium">{metric.value}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: metric.value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}