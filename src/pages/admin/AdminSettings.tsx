import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Save } from "lucide-react";

export default function AdminSettings() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Settings</h1>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Site Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Site Name</Label>
            <Input defaultValue="AutoDocs" />
          </div>
          <div className="space-y-2">
            <Label>Site Description</Label>
            <Input defaultValue="Automotive Technical Documentation" />
          </div>
          <div className="space-y-2">
            <Label>Company Name (for watermarks)</Label>
            <Input defaultValue="AutoDocs Inc." />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Default Security Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Anti-copy protection (default)</Label>
              <p className="text-xs text-muted-foreground mt-0.5">
                Enable content copy protection for new articles
              </p>
            </div>
            <Switch />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <Label>Image watermark (default)</Label>
              <p className="text-xs text-muted-foreground mt-0.5">
                Add company watermark to uploaded images
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <Label>Disable right-click</Label>
              <p className="text-xs text-muted-foreground mt-0.5">
                Prevent right-click context menu on documentation pages
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Content Defaults</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Auto-generate Table of Contents</Label>
              <p className="text-xs text-muted-foreground mt-0.5">
                Generate TOC from headings by default
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <Label>Enable comments</Label>
              <p className="text-xs text-muted-foreground mt-0.5">
                Allow users to leave comments on articles
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
