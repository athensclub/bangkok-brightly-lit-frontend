/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/VqNX0jh1yPa
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Chivo } from 'next/font/google'
import { Rubik } from 'next/font/google'

chivo({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { ResponsiveHeatMap } from "@nivo/heatmap"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"

export function Dashboard3() {
  return (
    (<div className="flex h-screen w-full flex-col">
      <header
        className="flex h-16 items-center justify-between border-b bg-gray-100 px-6 dark:bg-gray-800">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <MountainIcon className="h-6 w-6" />
            <span>Bangkok Light Monitoring</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="h-8 w-8" size="icon" variant="outline">
                <FilterIcon className="h-4 w-4" />
                <span className="sr-only">Filters</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>Filters</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex items-center justify-between">
                  <span>Location</span>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="location1">Location 1</SelectItem>
                      <SelectItem value="location2">Location 2</SelectItem>
                      <SelectItem value="location3">Location 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center justify-between">
                  <span>Time</span>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        className="w-40 justify-start text-left font-normal"
                        id="date"
                        variant="outline">
                        <CalendarClockIcon className="mr-2 h-4 w-4" />
                        June 01, 2023 - June 30, 2023
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent align="end" className="w-auto p-0">
                      <Calendar initialFocus mode="range" numberOfMonths={2} />
                    </PopoverContent>
                  </Popover>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="h-8 w-8" size="icon" variant="outline">
                <SettingsIcon className="h-4 w-4" />
                <span className="sr-only">Settings</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex items-center justify-between">
                  <span>Theme</span>
                  <Select defaultValue="system">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="System" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center justify-between">
                  <span>Units</span>
                  <Select defaultValue="metric">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Metric" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="metric">Metric</SelectItem>
                      <SelectItem value="imperial">Imperial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-[1fr_300px] gap-6 p-6 md:p-8">
        <div className="flex flex-col gap-6">
          <div
            className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Light Levels</h2>
              <div className="flex items-center gap-2">
                <RefreshCwIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-500 dark:text-gray-400">Last updated: 5 minutes ago</span>
              </div>
            </div>
            <div className="h-[500px] w-full">
              <HeatmapChart className="h-full w-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Card
            className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
            <CardHeader>
              <CardTitle>Location Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <h3 className="text-lg font-semibold">Location 1</h3>
                  <div className="flex items-center gap-2">
                    <SunIcon className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">Light Level: 850 lux</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 2 minutes ago</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MoveIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">Motion Events: 12</span>
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-semibold">Location 2</h3>
                  <div className="flex items-center gap-2">
                    <SunIcon className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">Light Level: 720 lux</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 5 minutes ago</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MoveIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">Motion Events: 8</span>
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-semibold">Location 3</h3>
                  <div className="flex items-center gap-2">
                    <SunIcon className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">Light Level: 450 lux</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 10 minutes ago</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MoveIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">Motion Events: 4</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card
            className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
            <CardHeader>
              <CardTitle>Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <h3 className="text-lg font-semibold">Light Levels</h3>
                  <LineChart className="aspect-[4/3]" />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-semibold">Motion Activity</h3>
                  <BarChart className="aspect-[4/3]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>)
  );
}

function BarChart(props) {
  return (
    (<div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data" />
    </div>)
  );
}


function CalendarClockIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h5" />
      <path d="M17.5 17.5 16 16.3V14" />
      <circle cx="16" cy="16" r="6" />
    </svg>)
  );
}


function ClockIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>)
  );
}


function FilterIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>)
  );
}


function HeatmapChart(props) {
  return (
    (<div {...props}>
      <ResponsiveHeatMap
        data={[
          {
            id: "A",
            data: [
              {
                x: "1",
                y: 4415,
              },
              {
                x: "2",
                y: -59456,
              },
              {
                x: "3",
                y: -79886,
              },
              {
                x: "4",
                y: 14478,
              },
              {
                x: "5",
                y: -63874,
              },
              {
                x: "6",
                y: -47542,
              },
              {
                x: "7",
                y: 16635,
              },
              {
                x: "8",
                y: -30278,
              },
              {
                x: "9",
                y: -95178,
              },
            ],
          },
          {
            id: "B",
            data: [
              {
                x: "1",
                y: 41241,
              },
              {
                x: "2",
                y: -77516,
              },
              {
                x: "3",
                y: -19422,
              },
              {
                x: "4",
                y: 61220,
              },
              {
                x: "5",
                y: -65044,
              },
              {
                x: "6",
                y: -59254,
              },
              {
                x: "7",
                y: 9299,
              },
              {
                x: "8",
                y: -58470,
              },
              {
                x: "9",
                y: 51828,
              },
            ],
          },
          {
            id: "C",
            data: [
              {
                x: "1",
                y: 94426,
              },
              {
                x: "2",
                y: 31248,
              },
              {
                x: "3",
                y: -15766,
              },
              {
                x: "4",
                y: 22271,
              },
              {
                x: "5",
                y: 86246,
              },
              {
                x: "6",
                y: -23717,
              },
              {
                x: "7",
                y: 97595,
              },
              {
                x: "8",
                y: -69800,
              },
              {
                x: "9",
                y: 74453,
              },
            ],
          },
          {
            id: "D",
            data: [
              {
                x: "1",
                y: -49899,
              },
              {
                x: "2",
                y: 13864,
              },
              {
                x: "3",
                y: -45673,
              },
              {
                x: "4",
                y: -20270,
              },
              {
                x: "5",
                y: 99430,
              },
              {
                x: "6",
                y: 17283,
              },
              {
                x: "7",
                y: -6514,
              },
              {
                x: "8",
                y: -21766,
              },
              {
                x: "9",
                y: -52610,
              },
            ],
          },
          {
            id: "E",
            data: [
              {
                x: "1",
                y: 81123,
              },
              {
                x: "2",
                y: -25153,
              },
              {
                x: "3",
                y: 2577,
              },
              {
                x: "4",
                y: 24409,
              },
              {
                x: "5",
                y: 82923,
              },
              {
                x: "6",
                y: 51283,
              },
              {
                x: "7",
                y: 10208,
              },
              {
                x: "8",
                y: 4055,
              },
              {
                x: "9",
                y: -14699,
              },
            ],
          },
        ]}
        margin={{ top: 0, right: 10, bottom: 30, left: 30 }}
        axisTop={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 16,
        }}
        colors={{
          type: "sequential",
          scheme: "blue_green",
        }}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
        ariaLabel="A heatmap chart/matrix" />
    </div>)
  );
}


function LineChart(props) {
  return (
    (<div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application" />
    </div>)
  );
}


function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}


function MoveIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="5 9 2 12 5 15" />
      <polyline points="9 5 12 2 15 5" />
      <polyline points="15 19 12 22 9 19" />
      <polyline points="19 9 22 12 19 15" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="22" />
    </svg>)
  );
}


function RefreshCwIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>)
  );
}


function SettingsIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>)
  );
}


function SunIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>)
  );
}
