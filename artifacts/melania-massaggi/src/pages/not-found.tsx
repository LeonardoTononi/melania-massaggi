import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { useI18n } from "@/i18n/I18nContext";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md border-primary/10 shadow-sm">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-primary shrink-0" />
            <h1 className="text-2xl font-serif font-semibold text-primary">{t("notFound.title")}</h1>
          </div>

          <p className="mt-4 text-sm text-foreground/70 font-light leading-relaxed">{t("notFound.body")}</p>

          <Link
            href="/"
            className="mt-8 inline-block text-sm uppercase tracking-widest font-semibold text-primary border-b border-primary/40 hover:border-primary pb-0.5 transition-colors"
          >
            {t("notFound.homeLink")}
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
