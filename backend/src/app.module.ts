import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Future: import module groups as they are built
// import { DestinationsModule } from './modules/destinations/destinations.module';
// import { PackagesModule } from './modules/packages/packages.module';
// import { BlogsModule } from './modules/blogs/blogs.module';
// import { FormsModule } from './modules/forms/forms.module';
// import { SeoModule } from './modules/seo/seo.module';
// import { UsersModule } from './modules/users/users.module';
// --- Placeholder modules (CRM, Booking, etc.) ---
// import { CrmModule } from './modules/crm/crm.module';
// import { QuotationModule } from './modules/quotation/quotation.module';
// import { BookingModule } from './modules/booking/booking.module';
// import { PaymentsModule } from './modules/payments/payments.module';
// import { NotificationsModule } from './modules/notifications/notifications.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    // Active modules (public website)
    // DestinationsModule,
    // PackagesModule,
    // BlogsModule,
    // FormsModule,
    // SeoModule,
    // UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
